#!/usr/bin/env node
/**
 * Downloads every image/video the site uses from Framer's CDN into /public/framer,
 * so the site can be fully self-hosted. Afterwards set NEXT_PUBLIC_LOCAL_ASSETS=1.
 *
 *   npm run assets:download
 */
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CDN = "https://framerusercontent.com";

const sources = await Promise.all(
  ["src/lib/assets.ts", "src/app/layout.tsx"].map((f) => readFile(path.join(root, f), "utf8")),
);

const files = new Set();
for (const src of sources) {
  // asset("images/abc.png") / asset("assets/clip.mp4") and img("abc.png", …)
  for (const m of src.matchAll(/asset\("((?:images|assets)\/[^"]+)"\)/g)) files.add(m[1]);
  for (const m of src.matchAll(/img\("([^"]+\.(?:png|jpe?g|webp|gif|svg))"/g)) files.add(`images/${m[1]}`);
}

let ok = 0;
for (const file of files) {
  const dest = path.join(root, "public", "framer", file);
  try {
    await access(dest);
    ok++;
    continue; // already downloaded
  } catch {}
  process.stdout.write(`↓ ${file} … `);
  const res = await fetch(`${CDN}/${file}`);
  if (!res.ok) {
    console.log(`failed (${res.status})`);
    continue;
  }
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log("done");
  ok++;
}
console.log(`\n${ok}/${files.size} files in public/framer. Now set NEXT_PUBLIC_LOCAL_ASSETS=1 (e.g. in .env.local).`);
