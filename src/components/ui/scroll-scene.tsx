"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Continuous, compositor-driven movement tied to this element's viewport position. */
export function ScrollScene({ children, className, travel = 60, scaleFrom = 1, rotateFrom = 0 }: {
  children: ReactNode; className?: string; travel?: number; scaleFrom?: number; rotateFrom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, .5, 1], [travel, 0, -travel]);
  const scale = useTransform(scrollYProgress, [0, .45, 1], [scaleFrom, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, .5, 1], [rotateFrom, 0, -rotateFrom]);
  return <div ref={ref} className={`scroll-scene ${className || ""}`}>
    <motion.div className="scroll-scene__content" style={{ y, scale, rotate }}>{children}</motion.div>
  </div>;
}
