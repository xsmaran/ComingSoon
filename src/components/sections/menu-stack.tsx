"use client";

import Link from "next/link";
import { Otter, type OtterVariant } from "@/components/ui/otter";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { featuredCategories, menuPrice } from "@/lib/beverage-menu";

const chapterNames = ["A little morning energy.", "A fresh perspective.", "Your well-earned pause."];
const tones = ["#ecd9bb", "#dce4ce", "#f1d5bc"];

function BeverageCard({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = .1 + index * .3;
  const y = useTransform(progress, [start, start + .28], [0, -750]);
  const rotate = useTransform(progress, [start, start + .28], [index === 1 ? -4 : 3, -12]);
  const opacity = useTransform(progress, [start + .15, start + .28], [1, 0]);
  return <motion.article className="nookaa-menu-card" style={{ background: tones[index], zIndex: 3 - index, y: index < 2 ? y : 0, rotate: index < 2 ? rotate : 2, opacity: index < 2 ? opacity : 1 }}>
    <div className="nookaa-menu-card__top"><span>{featuredCategories[index].name}</span><span>0{index + 1}</span></div>
    <div className="nookaa-menu-card__drink"><Otter variant={(["mug", "student", "waiter"] as OtterVariant[])[index]} /></div>
    <h3>{chapterNames[index]}</h3>
    <ul className="nookaa-menu-card__prices">{featuredCategories[index].items.slice(0, 3).map((item) => <li key={item.name}><span>{item.name}</span><strong>{menuPrice(item.price)}</strong></li>)}</ul>
    <p className="nookaa-menu-card__note">Prices in INR · Taxes extra.</p>
  </motion.article>;
}

export function MenuStack() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return <section ref={ref} className="nookaa-menu-story" aria-labelledby="nookaa-menu-title">
    <div className="nookaa-menu-story__sticky">
      <div className="nookaa-menu-story__copy"><p className="section-eyebrow">THE MENU / MADE FOR YOUR MOOD</p><h2 id="nookaa-menu-title">Find your<br /><em>kind of sip.</em></h2><p>Something bold. Something mellow. Something that makes your day. Explore beverages for whatever life has lined up.</p><Link href="#beverage-menu" className="editorial-button">Explore the beverage menu <span aria-hidden="true">↗</span></Link><div className="nookaa-menu-story__foot" aria-hidden="true"><span>THREE MOODS. ENDLESS MOMENTS.</span><span>↓</span></div></div>
      <div className="nookaa-menu-story__cards">{featuredCategories.map((menu, index) => <BeverageCard key={menu.id} index={index} progress={scrollYProgress} />)}</div>
    </div>
  </section>;
}
