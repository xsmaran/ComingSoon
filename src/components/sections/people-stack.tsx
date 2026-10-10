"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { peoplePhotos } from "@/lib/content";

function Photo({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = .12 + index * .28;
  const y = useTransform(progress, [start, start + .25], [0, -850]);
  const rotate = useTransform(progress, [start, start + .25], [index === 1 ? -7 : 4, -18]);
  const opacity = useTransform(progress, [start + .12, start + .25], [1, 0]);
  const photo = peoplePhotos[index];
  return <motion.figure className="nookaa-people__photo" style={{ y: index < 2 ? y : 0, rotate: index < 2 ? rotate : 4, opacity: index < 2 ? opacity : 1, zIndex: 3 - index }}>
    <div className="nookaa-people__image"><Image src={photo.image.src} alt={photo.alt} fill sizes="(max-width: 809px) 85vw, 55vw" className={photo.image.fit === "contain" ? "object-contain p-8" : "object-cover"} /></div>
    <figcaption><span>{["CHOOSE YOUR BEVERAGE", "COLLECT AT THE COUNTER", "SIP & GO"][index]}</span><span>{String(index + 1).padStart(2, "0")} / 03</span></figcaption>
  </motion.figure>;
}

export function PeopleStack() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return <section ref={ref} className="nookaa-people">
    <div className="nookaa-people__sticky">
      <div className="nookaa-people__copy"><p className="section-eyebrow">02 / YOUR SIP, IN THREE STEPS</p><h2>Pick your sip.<br /><em>Take it along.</em></h2><p>Choose your favourite beverage, collect it at the counter and head on with your day. Just good drinks, ready to go.</p><span className="nookaa-people__scroll" aria-hidden="true">SCROLL THROUGH THE STEPS ↓</span></div>
      <div className="nookaa-people__stack">{peoplePhotos.map((_, index) => <Photo key={index} index={index} progress={scrollYProgress} />)}</div>
    </div>
  </section>;
}
