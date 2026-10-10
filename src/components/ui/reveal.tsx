"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/cn";

/** Shared transition for all scroll/appear effects (Framer's smooth spring, no bounce). */
export const appearTransition = { type: "spring", duration: 0.85, bounce: 0 } as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Initial vertical offset in px (Framer: translateY(30/50/70/90px)). */
  y?: number;
  /** Initial horizontal offset in px. */
  x?: number;
  delay?: number;
  /** Animate on mount instead of when scrolled into view. */
  onMount?: boolean;
};

/** Fades + slides an element in when it enters the viewport, like Framer's “Appear” effect. */
export function Reveal({ y = 30, x = 0, delay = 0, onMount = false, children, className, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, x: 0, y: 0 };
  return (
    <motion.div
      initial={{ opacity: 0, x, y: Math.min(y, 50) }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0.08 } })}
      transition={reduce ? { duration: 0 } : { ...appearTransition, delay }}
      // With “reduce motion” on, show the final state immediately (also covers the SSR frame).
      className={cn("nookaa-reveal", className, "motion-reduce:!opacity-100 motion-reduce:![transform:none]")}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
