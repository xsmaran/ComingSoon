"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const reduce = useReducedMotion();
  return <motion.div aria-hidden="true" className="nookaa-scroll-progress" style={{ scaleX: reduce ? scrollYProgress : scaleX }} />;
}
