import { audiences } from "@/lib/content";
import { Otter } from "@/components/ui/otter";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const offsets = [50, 70, 90];

export function Audiences() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[42px] bg-cream px-5 pt-[50px] pb-5 md:gap-16 md:px-10 md:pt-[50px] md:pb-10 lg:gap-[94px] lg:px-[50px] lg:pt-[70px] lg:pb-[50px]">
      <SectionHeading>Different days. Your kind of sip.</SectionHeading>

      <div
        id="customers"
        className="relative flex w-full max-w-[800px] flex-col items-center justify-start gap-6 md:max-w-[750px] md:flex-row md:gap-4 lg:max-w-[1200px] lg:gap-6"
      >
        {audiences.map((a, i) => (
          <Reveal key={a.title} y={offsets[i]} delay={i * .1} className="relative w-full md:w-px md:flex-1">
            <article
              data-hover-card
              className="nookaa-audience-card group relative flex w-full items-center justify-center overflow-hidden rounded-[32.4px] bg-paper p-[32.4px] lg:rounded-[50px] lg:p-[50px]"
            >
              <div className="relative flex w-px flex-1 flex-col items-center justify-start gap-[16.2px] lg:gap-[25px]">
                <div className="flex w-full flex-col items-center gap-[19.44px] lg:gap-[30px]">
                  <p className="w-full font-autour text-[20px]/[24px] text-brown text-center whitespace-pre-wrap md:text-[16px]/[19.2px] lg:text-[25px]/[30px]">
                    {a.title}
                  </p>
                </div>

                <div className="relative aspect-square w-full max-w-[194px] shrink-0 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none lg:max-w-[240px]">
                  <Otter variant={a.otter} label={a.imageAlt} className="size-full" />
                </div>

                <div className="flex w-full flex-col items-center gap-[19.44px] lg:gap-[30px]">
                  <p className="w-full max-w-[203px] font-chiron text-[16px]/[20.8px] text-brown text-center whitespace-pre-wrap lg:max-w-[250px] lg:text-[20px]/[26px]">
                    {a.blurb}
                  </p>
                  <PillButton href={a.href} className="px-6 py-3 text-[16px]/[24px] lg:px-8 lg:py-4 lg:text-[18px]/[27px]">
                    {a.cta}
                  </PillButton>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
