"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  /** Gap between items in px (also used between repeated copies). Accepts a responsive map. */
  gap: number | { base: number; md?: number; lg?: number };
  /** Speed in px per second (Framer Ticker default is 100). */
  speed?: number;
  direction?: "left" | "right";
  /** How many copies of the item list are rendered (must cover at least 2× the viewport). */
  copies?: number;
  className?: string;
  trackClassName?: string;
  pauseOnHover?: boolean;
};

function useResponsiveGap(gap: MarqueeProps["gap"]) {
  const [value, setValue] = useState(typeof gap === "number" ? gap : gap.lg ?? gap.md ?? gap.base);
  useEffect(() => {
    if (typeof gap === "number") return setValue(gap);
    const update = () => {
      const w = window.innerWidth;
      setValue(w >= 1200 ? gap.lg ?? gap.md ?? gap.base : w >= 810 ? gap.md ?? gap.base : gap.base);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [gap]);
  return value;
}

/** Infinite horizontal ticker (replacement for Framer's Ticker component). */
export function Marquee({
  children,
  gap,
  speed = 100,
  direction = "left",
  copies = 3,
  className,
  trackClassName,
  pauseOnHover = false,
}: MarqueeProps) {
  const g = useResponsiveGap(gap);
  const firstCopy = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const el = firstCopy.current;
    if (!el) return;
    const measure = () => setDuration(el.getBoundingClientRect().width / speed);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [speed]);

  return (
    <div className={cn("flex w-full overflow-x-clip", pauseOnHover && "group", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          direction === "left" ? "animate-[marquee_var(--d)_linear_infinite]" : "animate-[marquee_var(--d)_linear_infinite_reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          duration === null && "[animation-play-state:paused]",
          trackClassName,
        )}
        style={
          {
            "--d": `${duration ?? 30}s`,
            "--copies": copies,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: copies }, (_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCopy : undefined}
            aria-hidden={i > 0 || undefined}
            className="flex shrink-0 items-center"
            style={{ gap: g, paddingRight: g }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
