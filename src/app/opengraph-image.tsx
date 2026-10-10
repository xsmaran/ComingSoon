import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Nookaa — Grab. Sip. Go. Beverages & Beyond.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mascot = await readFile(path.join(process.cwd(), "public/brand/official-otter.png"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#f5f1e9", padding: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#4f3119" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 30, letterSpacing: 8 }}>NOOKAA</div>
        <div style={{ fontSize: 90, fontWeight: 700, lineHeight: 1.05, display: "flex", flexDirection: "column" }}><span>Grab.</span><span>Sip. Go.</span></div>
        <div style={{ fontSize: 26 }}>Beverages &amp; Beyond.</div>
      </div>
      {/* ImageResponse renders the embedded local brand asset without an external request. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${mascot.toString("base64")}`} width={400} height={400} alt="" />
    </div>, size,
  );
}
