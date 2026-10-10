"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Otter, type OtterVariant } from "@/components/ui/otter";
import { cn } from "@/lib/cn";

type Illo = { otter: OtterVariant; box: string };

const otterBox = "inset-0";

/** Each doodle's frame inside the 130×158 slot (sizes/offsets from the original component). */
const illos = {
  // Topic-specific otter doodles share the same brand identity and line-art style.
  mug: { otter: "mug", box: otterBox },
  fuelUp: { otter: "scooter", box: otterBox },
  hello: { otter: "smile", box: otterBox },
  skater: { otter: "skater", box: otterBox },
  time: { otter: "mug", box: otterBox },
  bag: { otter: "student", box: otterBox },
  reader: { otter: "reader", box: otterBox },
  laptop: { otter: "laptop", box: otterBox },
  student: { otter: "student", box: otterBox },
  waiter: { otter: "waiter", box: otterBox },
} satisfies Record<string, Illo>;

type IlloKey = keyof typeof illos;

function IlloArt({ illo }: { illo: Illo }) {
  return <Otter variant={illo.otter} className="size-full" />;
}

/**
 * Which doodle each corner shows while a given menu card is pinned
 * (index -1 = only the pattern is visible).
 */
const corners: { position: string; hiddenUntilActive: boolean; byCard: Record<number, IlloKey | null> }[] = [
  { position: "top-[103px] left-[50px]", hiddenUntilActive: false, byCard: { [-1]: null, 0: "mug", 1: "student", 2: "waiter" } },
  { position: "top-[95px] right-[50px]", hiddenUntilActive: true, byCard: { [-1]: "hello", 0: "hello", 1: "bag", 2: "reader" } },
  { position: "right-[50px] bottom-[50px]", hiddenUntilActive: false, byCard: { [-1]: null, 0: "time", 1: "skater", 2: "hello" } },
  { position: "bottom-[50px] left-[50px]", hiddenUntilActive: true, byCard: { [-1]: "fuelUp", 0: "fuelUp", 1: "laptop", 2: "time" } },
];

function useActiveMenuCard() {
  const [active, setActive] = useState(-1);
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-menu-index]"));
    if (!cards.length) return;
    let frame = 0;
    // A card counts as active once its section has scrolled past the middle of the viewport.
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let next = -1;
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= mid) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

/** Cartoon doodles that pop in the four corners of the pinned pattern (desktop only). */
export function CornerIllustrations() {
  const active = useActiveMenuCard();
  return (
    <>
      {corners.map((corner, ci) => {
        const key = corner.byCard[active] ?? null;
        const visible = !corner.hiddenUntilActive || active >= 0;
        return (
          <motion.div
            key={ci}
            className={cn("absolute hidden lg:block", corner.position)}
            initial={false}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex w-min items-center justify-center gap-[6.48px] overflow-clip">
              <div className="relative aspect-[0.824066] h-[158px] w-[130px]">
                <AnimatePresence mode="popLayout">
                  {key && (
                    <motion.div
                      key={key}
                      className={cn("absolute", illos[key].box)}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ type: "spring", duration: 0.5, bounce: 0.35 }}
                    >
                      <IlloArt illo={illos[key]} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
