"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";

type HoverVideoProps = {
  video: string;
  /** Illustration shown on top of the video on desktop; it fades out on hover. */
  cover?: ImageAsset;
  coverAlt?: string;
  coverSizes?: string;
  /** Classes applied to both the video and the cover layer (positioning/inset). */
  layerClassName?: string;
  className?: string;
};

/**
 * Desktop (>= 1200px): shows the illustration, plays the clip while hovered.
 * Tablet/mobile: no illustration, the clip autoplays (muted, looped) while on screen.
 */
export function HoverVideo({ video, cover, coverAlt = "", coverSizes = "550px", layerClassName, className }: HoverVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Hover is tracked on the closest card so the whole card triggers playback.
  useEffect(() => {
    const card = ref.current?.closest<HTMLElement>("[data-hover-card]") ?? ref.current;
    if (!card) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointerleave", leave);
    return () => {
      card.removeEventListener("pointerenter", enter);
      card.removeEventListener("pointerleave", leave);
    };
  }, []);

  // Mobile/tablet: play while visible.
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shouldPlay = desktop && cover ? hovered : inView;
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) v.play().catch(() => {});
    else v.pause();
  }, [shouldPlay]);

  return (
    <div ref={ref} className={cn("absolute inset-0", className)}>
      <div className={cn("absolute", layerClassName ?? "inset-0")}>
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          playsInline
          preload={shouldPlay ? "auto" : "none"}
          className="size-full object-cover"
        />
      </div>
      {cover && (
        <div
          className={cn(
            "absolute hidden transition-opacity duration-300 lg:block",
            hovered ? "opacity-0" : "opacity-100",
            layerClassName ?? "inset-0",
          )}
        >
          <Image src={cover.src} alt={coverAlt} fill sizes={coverSizes} className="object-cover" />
        </div>
      )}
    </div>
  );
}
