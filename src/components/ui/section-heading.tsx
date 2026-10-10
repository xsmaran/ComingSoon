import { AsteriskIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

/** Three hand-drawn asterisks that sit above every section title. */
export function Asterisks({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-min items-center justify-center gap-[7.68px] lg:gap-3", className)}>
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative aspect-[0.919298] w-5 shrink-0 lg:w-[31px]">
          <AsteriskIcon className="size-full text-brown" />
        </div>
      ))}
    </div>
  );
}

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Asterisks + centered Autour One headline (Framer “Section Heading” component).
 * Width: 700 / 450 / 300px max; headline 42 / 32 / 30px.
 */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("relative w-full max-w-[300px] md:max-w-[450px] lg:max-w-[700px]", className)}>
      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-clip lg:gap-6">
        <Reveal y={30} className="relative">
          <Asterisks />
        </Reveal>
        <div className="flex w-full max-w-[310px] items-center justify-center md:max-w-[450px] lg:max-w-[600px]">
          <Reveal y={30} className="flex-1">
            <h2 className="font-autour text-[30px]/[42px] text-brown text-center whitespace-pre-wrap md:text-[32px]/[44.8px] lg:text-[42px]/[58.8px]">
              {children}
            </h2>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
