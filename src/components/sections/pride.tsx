import { images } from "@/lib/assets";
import { BlurIn } from "@/components/ui/blur-in";
import { FillImage } from "@/components/ui/fill-image";
import { Reveal } from "@/components/ui/reveal";

/** Brown diamond-bordered banner: “We are not your commonplace coffee shop”. */
export function Pride() {
  return (
    <section className="relative z-[2] flex w-full items-center justify-center gap-2.5 bg-cream">
      <div className="relative flex aspect-[0.666667] w-px flex-1 flex-col items-center justify-center gap-[42px] px-5 pt-[50px] pb-5 md:aspect-[1.72608] md:px-10 md:pt-[50px] md:pb-10 lg:gap-16 lg:p-[100px]">
        <FillImage image={images.prideMobile} alt="Brown rectangle with diamond border" sizes="100vw" className="md:hidden" />
        <FillImage image={images.prideDesktop} alt="Brown rectangle with diamond border" sizes="100vw" className="hidden md:block" />

        <div className="relative z-[1] flex w-full max-w-[210px] flex-col items-center justify-center gap-5 pb-[30px] md:max-w-[450px] md:gap-2 md:pb-4 lg:max-w-[740px] lg:gap-5">
          <div className="w-full">
            <BlurIn className="font-autour text-[28px]/[39.2px] text-cream text-center whitespace-pre-wrap md:hidden">
              WE ARE NOT YOUR COMMON BEVERAGE BRAND
            </BlurIn>
            <BlurIn className="hidden font-autour text-cream text-center whitespace-pre-wrap md:block md:text-[40px]/[52px] lg:text-[70px]/[84px]">
              WE ARE NOT YOUR COMMONPLACE BEVERAGE BRAND
            </BlurIn>
          </div>
          <Reveal y={30} className="w-full max-w-[700px]">
            <p className="font-chiron text-[16px]/[20.8px] text-cream text-center whitespace-pre-wrap md:text-[14px]/[18.2px] lg:text-[20px]/[26px]">
              From the beans we roast to the way we serve, every detail is brewed with personality, creativity, and a touch of
              rebellion. This is nookaa, we deliver beverage experiences you won’t find anywhere else.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
