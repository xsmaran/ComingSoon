import { benefits } from "@/lib/content";
import { Otter } from "@/components/ui/otter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const offsets = [50, 70, 90];

/** “Curious how your coffee will be served?” — three service promises (slides over the pinned menu stack on the home page). */
export function Benefits({
  title = "Curious how your beverage will be served?",
  id = "latte-learners-1",
}: {
  title?: string;
  id?: string;
}) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div
        id={id}
        className="relative z-[1] flex w-full flex-col items-center justify-center gap-[42px] rounded-t-[60px] bg-cream p-[50px] md:gap-16 md:pb-[100px] lg:gap-[94px] lg:px-[50px] lg:py-[100px]"
      >
        <SectionHeading>{title}</SectionHeading>

        <div className="relative flex w-full max-w-[800px] flex-col items-center justify-start gap-8 overflow-clip md:max-w-[750px] md:flex-row md:gap-[65px] lg:max-w-[1200px] lg:gap-0">
          {benefits.map((b, i) => (
            <Reveal key={b.title} y={offsets[i]} className="relative w-full md:w-px md:flex-1">
              <article className="flex w-full flex-col items-center justify-start gap-4 lg:gap-5">
                <div className="relative aspect-square size-[184px] shrink-0 lg:size-[230px]">
                  <Otter variant={b.otter} label={b.alt} className="size-full" />
                </div>
                <div className="flex w-full max-w-[253px] flex-col items-center justify-start gap-[12.8px] lg:gap-4">
                  <p className="w-[202px] font-autour text-[24px]/[28.8px] text-brown text-center whitespace-pre-wrap lg:w-full lg:text-[30px]/[36px]">
                    {b.title}
                  </p>
                  <p className="w-full max-w-[253px] font-chiron text-[16px]/[19.2px] text-brown text-center lowercase whitespace-pre-wrap md:text-[14px]/[16.8px] lg:text-[20px]/[24px]">
                    {b.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
