"use client";

import { useEffect, useRef } from "react";

/** Muted, looping clip that only plays while it is on screen (saves bandwidth & battery). */
export function AutoplayVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.preload = "auto";
          v.play().catch(() => {});
        } else v.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div className={className}>
      <video ref={ref} src={src} loop muted playsInline preload="none" className="size-full object-cover" />
    </div>
  );
}
