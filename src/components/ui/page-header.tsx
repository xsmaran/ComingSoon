import { cn } from "@/lib/cn";
import { BlurIn } from "./blur-in";
import { Reveal } from "./reveal";
import { Asterisks } from "./section-heading";

type PageHeaderProps = {
  title: string;
  subtitle?: React.ReactNode;
  /** Buttons or meta shown under the subtitle. */
  children?: React.ReactNode;
  /** Optional content below the header block (e.g. a hero image). */
  below?: React.ReactNode;
  className?: string;
};

/**
 * Inner-page header, following the original layout template:
 * 200 / 150 / 130px top padding (clears the floating nav), asterisks, big Autour One title, intro line.
 */
export function PageHeader({ title, subtitle, children, below, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-2.5 overflow-clip bg-cream pt-[130px] md:pt-[150px] lg:pt-[200px]",
        className,
      )}
    >
      <div className="relative z-[1] flex w-full flex-col items-center justify-center gap-8">
        <div className="relative z-[1] flex w-full flex-col items-center gap-8 p-5 md:px-[50px] md:pt-0 md:pb-8 lg:gap-[50px] lg:px-[50px] lg:pb-[50px]">
          <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-5 md:max-w-[1000px] lg:max-w-[1200px]">
            <Reveal onMount y={30} className="relative">
              <Asterisks />
            </Reveal>
            <div className="flex w-full max-w-[600px] items-center justify-center">
              <BlurIn
                as="h1"
                onMount
                className="w-px max-w-[300px] flex-1 font-autour text-[40px]/[52px] text-brown text-center whitespace-pre-wrap md:max-w-[450px] md:text-[35px]/[49px] lg:max-w-[700px] lg:text-[50px]/[70px]"
              >
                {title}
              </BlurIn>
            </div>
            {subtitle && (
              <Reveal onMount y={30} delay={0.1} className="w-full max-w-[700px] md:max-w-[450px] lg:max-w-[700px]">
                <p className="font-chiron text-[18px]/[25.2px] text-brown text-center whitespace-pre-wrap md:text-[20px]/[26px]">{subtitle}</p>
              </Reveal>
            )}
            {children && (
              <Reveal onMount y={40} delay={0.2} className="relative flex flex-wrap items-center justify-center gap-4 pt-3">
                {children}
              </Reveal>
            )}
          </div>
          {below}
        </div>
      </div>
    </section>
  );
}
