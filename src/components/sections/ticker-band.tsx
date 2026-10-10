import { Fragment } from "react";
import { tickerWords, ribbonWords } from "@/lib/content";
import { ChatDotsIcon, CroissantIcon, MugIcon, TeacupIcon } from "@/components/icons";
import { Marquee } from "@/components/ui/marquee";

const tickerIcons = { chat: ChatDotsIcon, teacup: TeacupIcon, croissant: CroissantIcon, mug: MugIcon };

/** Orange band with brown rules and a scrolling list of words + icons (below the About section). */
export function TickerBand({ items = tickerWords }: { items?: ReadonlyArray<{ word: string; icon: keyof typeof tickerIcons }> }) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-cream">
      <div className="flex w-full flex-col items-center justify-center gap-2.5 overflow-clip">
        <div className="relative z-[1] flex w-full flex-col items-center justify-center gap-[5px] bg-orange py-[5px] md:gap-2 lg:gap-4 lg:py-2.5">
          <div className="h-[5px] w-full overflow-clip bg-brown" />
          <Marquee gap={{ base: 10, lg: 17 }} copies={3}>
            {items.map(({ word, icon }, i) => {
              const Icon = tickerIcons[icon];
              return (
                <Fragment key={`${word}-${i}`}>
                  <h4 className="font-autour text-[28px]/[36.4px] text-brown whitespace-pre md:text-[30px]/[36px] lg:text-[35px]/[42px]">
                    {word}
                  </h4>
                  <Icon className="h-[41px] w-[52px] shrink-0 text-brown" />
                </Fragment>
              );
            })}
          </Marquee>
          <div className="h-[5px] w-full overflow-clip bg-brown" />
        </div>
      </div>
    </section>
  );
}

function RibbonItems({ words }: { words: string[] }) {
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <h3 className="font-autour text-[22px]/[26.4px] text-cream whitespace-pre md:text-[32px]/[44.8px] lg:text-[35px]/[42px]">
            {word}
          </h3>
          <span className="size-2 shrink-0 rounded-[64%] bg-cream md:size-2.5 md:rounded-[80%] lg:size-3 lg:rounded-full" />
        </Fragment>
      ))}
    </>
  );
}

/** Two crossing brown ribbons with scrolling words (between the blog and FAQ sections). */
export function Ribbons({ words = ribbonWords }: { words?: string[] }) {
  const ribbon =
    "absolute top-[calc(50%-25px)] right-[-350px] left-[-351px] flex h-[50px] flex-col items-center justify-center bg-brown md:top-[calc(50%-28.4px)] md:right-[-25px] md:left-[-25px] md:h-[57px] lg:top-[calc(50%-35.5px)] lg:right-[-133px] lg:left-[-132px] lg:h-[71px]";
  const gap = { base: 6.4, md: 8, lg: 17 };
  return (
    <section aria-hidden className="relative flex w-full flex-col items-center justify-center bg-cream">
      <div className="relative h-[154px] w-full overflow-clip md:h-[250px] lg:h-[280px]">
        <div className={`${ribbon} -rotate-10 opacity-50 md:-rotate-5`}>
          <Marquee gap={gap} copies={4} direction="right">
            <RibbonItems words={words} />
          </Marquee>
        </div>
        <div className={`${ribbon} z-[1] rotate-10 md:rotate-5`}>
          <Marquee gap={gap} copies={4}>
            <RibbonItems words={words} />
          </Marquee>
        </div>
      </div>
    </section>
  );
}
