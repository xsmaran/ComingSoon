"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [.25, 1]);
  return <motion.span style={{ opacity }}>{word}{" "}</motion.span>;
}

export function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .85", "end .4"] });
  const words = text.split(" ");
  return <p ref={ref} className="nookaa-manifesto__text" aria-label={text}>
    <span aria-hidden="true">{words.map((word, index) => <Word key={index} word={word} index={index} total={words.length} progress={scrollYProgress} />)}</span>
  </p>;
}
