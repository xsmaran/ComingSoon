"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { BrandLogo } from "@/components/ui/brand-logo";

/** A short iced-beverage intro on each route load and refresh. */
export function Preloader() {
  const pathname = usePathname();
  return <CupIntro key={pathname} />;
}

function CupIntro() {
  const [stage, setStage] = useState<"fill" | "exit" | "done">("fill");
  const cupClip = useId();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) { setStage("done"); return; }
    setStage("fill");
    const exit = window.setTimeout(() => setStage("exit"), 3250);
    const done = window.setTimeout(() => setStage("done"), 3900);
    const stop = () => { if (preference.matches) setStage("done"); };
    preference.addEventListener("change", stop);
    return () => {
      window.clearTimeout(exit);
      window.clearTimeout(done);
      preference.removeEventListener("change", stop);
    };
  }, []);

  if (stage === "done") return null;

  return <motion.div className="nookaa-preloader nookaa-preloader--iced" initial={{ opacity: 1 }} animate={{ opacity: stage === "exit" ? 0 : 1 }} transition={{ duration: .65, ease: "easeInOut" }}>
    <div className="nookaa-preloader__top"><BrandLogo /></div>
    <div className="nookaa-preloader__center">
      <svg className="nookaa-preloader__art" viewBox="0 0 240 280" fill="none" aria-hidden="true">
        <defs><clipPath id={cupClip}><path d="M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z" /></clipPath></defs>
        <ellipse cx="120" cy="249" rx="60" ry="7" fill="#5d3b1f" opacity=".06" />
        <path d="m148 29-16 68" stroke="#5d3b1f" strokeWidth="6" strokeLinecap="round" />
        <path d="M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z" fill="#fffaf0" />
        <g clipPath={`url(#${cupClip})`}>
          <motion.rect x="64" width="112" height="145" fill="#b98459" initial={{ y: 240 }} animate={{ y: 119 }} transition={{ delay: .3, duration: 1.5, ease: [.22, 1, .36, 1] }} />
          <motion.path d="M63 119q18-6 37 0t37 0t39 0v9H63Z" fill="#dec3a4" initial={{ y: 121 }} animate={{ y: 0 }} transition={{ delay: .3, duration: 1.5, ease: [.22, 1, .36, 1] }} />
          {[[81, 101, -10], [128, 105, 12], [105, 139, -6]].map(([x, y, rotate], index) => <motion.g key={x} initial={{ y: -18, opacity: 1 }} animate={{ y: 0 }} transition={{ delay: .45 + index * .22, duration: .8, ease: [.22, 1, .36, 1] }}>
            <g transform={`rotate(${rotate} ${x + 16} ${y + 16})`}>
              <rect x={x} y={y} width="32" height="33" rx="6" fill="#e6f3f9" fillOpacity=".93" stroke="#9cbdc9" strokeWidth="1.5" />
              <path d={`M${x + 5} ${y + 12}v-6h12M${x + 7} ${y + 25}l17-15`} stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <path d={`M${x + 22} ${y + 28}h5v-9`} stroke="#bbd6e0" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </motion.g>)}
        </g>
        <path d="M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z" stroke="#5d3b1f" strokeWidth="2.5" />
        <ellipse cx="120" cy="82" rx="59" ry="8" fill="#fffaf0" stroke="#5d3b1f" strokeWidth="2.5" />
        <path d="m148 29-13 53" stroke="#5d3b1f" strokeWidth="6" strokeLinecap="round" />
        <circle cx="120" cy="203" r="28" fill="#f5f1e9" stroke="#ddcbb5" strokeWidth="1" />
        <image href="/brand/official-otter.png" x="93" y="176" width="54" height="54" preserveAspectRatio="xMidYMid meet" />
      </svg>
      <p className="nookaa-preloader__eyebrow">SIP. CHILL. REPEAT.</p>
      <div className="nookaa-preloader__progress" aria-hidden="true"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 3.25, ease: "easeInOut" }} /></div>
      <span role="status" className="sr-only">Preparing your Nookaa experience.</span>
    </div>
    <div className="nookaa-preloader__bottom"><span>A LITTLE SIP OF HAPPY.</span><button type="button" onClick={() => setStage("exit")}>Skip intro <span aria-hidden="true">↗</span></button></div>
  </motion.div>;
}
