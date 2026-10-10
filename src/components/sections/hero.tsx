"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { BlurIn } from "@/components/ui/blur-in";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { Storefront } from "./storefront";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, .94]);
  const opacity = useTransform(scrollYProgress, [0, .7, 1], [1, 1, .3]);
  return (
    <section ref={ref} className="nookaa-hero nookaa-hero--store" aria-label="Welcome to Nookaa">
      <motion.div className="nookaa-hero__copy" style={{ y: copyY, opacity }}>
        <p className="nookaa-hero__eyebrow"><span aria-hidden="true">✳</span> BEVERAGES & BEYOND.</p>
        <BlurIn as="h1" onMount className="nookaa-hero__title font-autour text-brown">
          Your mood.<br />Your moment.<br /><span className="nookaa-hero__accent">Your beverage.</span>
        </BlurIn>
        <Reveal onMount y={20} delay={0.1} className="nookaa-hero__description">
          <p>Coffee, matcha, coolers and more. Made with care, picked up at the counter, ready for wherever your day goes.</p>
        </Reveal>
        <Reveal onMount y={20} delay={0.15} className="nookaa-hero__actions">
          <PillButton href="/menu" className="pointer-events-auto px-7 py-3 text-[16px]/[24px]">Explore beverages <span aria-hidden="true">↗</span></PillButton>
          <Link href="/about-us" className="nookaa-hero__story">Our story <span aria-hidden="true">→</span></Link>
        </Reveal>
        <Reveal onMount y={15} delay={0.2} className="nookaa-hero__details">
          <span><i aria-hidden="true">✳</i> Beverages only</span>
          <span><i aria-hidden="true">↗</i> Grab &amp; go</span>
        </Reveal>
      </motion.div>
      <motion.div className="nookaa-hero__visual" style={{ y: sceneY, scale: sceneScale }}>
        <div className="nookaa-hero__scene-label"><span className="nookaa-hero__scene-dot" aria-hidden="true" /> YOUR NEXT HAPPY STOP <span>↘</span></div>
        <Storefront className="nookaa-hero__store" />
      </motion.div>
      <div className="nookaa-hero__bottom" aria-hidden="true"><span>A LITTLE SIP OF HAPPY.</span><span>SCROLL TO FIND YOUR FAVOURITE <span aria-hidden="true">↓</span></span></div>
    </section>
  );
}
