"use client";

import { motion, useReducedMotion } from "motion/react";
import { appearTransition } from "./reveal";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  p: motion.p,
} as const;

type BlurInProps = {
  as?: keyof typeof tags;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  onMount?: boolean;
};

/** Headline reveal: blur(10px) + 10px rise + fade, matching the original text effect. */
export function BlurIn({ as = "h2", className, children, delay = 0, onMount = false }: BlurInProps) {
  const Tag = tags[as];
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <Tag
      className={`nookaa-reveal ${className ?? ""} motion-reduce:!opacity-100 motion-reduce:![filter:none] motion-reduce:![transform:none]`}
      initial={{ opacity: 0.001, y: 10, filter: "blur(10px)" }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0 } })}
      transition={reduce ? { duration: 0 } : { ...appearTransition, duration: 1, delay }}
    >
      {children}
    </Tag>
  );
}
