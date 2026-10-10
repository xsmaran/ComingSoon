import type { Menu } from "@/lib/content";
import { cn } from "@/lib/cn";
import { PillButton } from "./pill-button";

const dashed = "inset-border inset-border-dashed [--border-color:var(--color-brown)]";

function DashLine() {
  return <div className={cn(dashed, "relative h-px w-px flex-1 overflow-clip [--border-width:1.53px] md:h-[3px] md:[--border-width:3px]")} />;
}

type MenuCardProps = {
  menu: Menu;
  /** Big headline at the top of the card (the home page always shows “MENU”). */
  heading?: string;
  /** Fixed 336/641px width (home page) or fill the parent up to 641px (menu page grid). */
  fluid?: boolean;
  /** Mobile item spacing: 14px on most cards, 16px on the third home card. */
  looseItems?: boolean;
  cta?: { label: string; href: string } | null;
  className?: string;
  /** Narrower left padding on the CTA (matches the third home card on mobile). */
  narrowCtaLeft?: boolean;
};

/** Orange menu card with a dashed inner frame, audience label and price list. */
export function MenuCard({
  menu,
  heading = "MENU",
  fluid = false,
  looseItems = false,
  cta = { label: "Menu", href: "/menu" },
  narrowCtaLeft = false,
  className,
}: MenuCardProps) {
  return (
    <div
      className={cn(
        "relative z-[1] flex items-center justify-center rounded-[45px] bg-orange p-[14.85px] md:rounded-[88px] md:p-[25px]",
        fluid ? "w-full max-w-[641px]" : "w-[336px] md:w-[641px]",
        className,
      )}
    >
      <div
        className={cn(
          dashed,
          "relative flex w-px flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-[31px] px-4 pt-4 pb-6 [--border-width:1.98px]",
          "md:gap-6 md:rounded-[61px] md:p-[25px] md:[--border-width:3px]",
        )}
      >
        <div className="flex w-full flex-col items-start justify-start gap-6">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <h3 className="w-full font-autour text-[60px]/[72px] text-brown text-center md:text-[90px]/[108px]">{heading}</h3>
            <div className="flex w-full items-center gap-[21.2268px]">
              <DashLine />
              <p className="font-chiron text-[14px]/[16.8px] text-espresso text-center whitespace-pre md:text-[20px]/[24px]">
                {menu.audience}
              </p>
              <DashLine />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[22px]">
            <ul className={cn("flex w-full flex-col items-start justify-start md:gap-[18px]", looseItems ? "gap-4" : "gap-[14px]")}>
              {menu.items.map((item) => (
                <li key={item.name} className="flex w-full items-center gap-2.5">
                  <div className="flex w-px flex-1 items-start">
                    <div className="flex w-px flex-1 flex-col items-start gap-1">
                      <p className="w-full font-autour text-[16px]/[19.2px] text-cocoa whitespace-pre-wrap md:text-[20px]/[24px]">
                        {item.name}
                      </p>
                      <p className="w-full max-w-[200px] font-chiron text-[14px]/[16.8px] text-brown text-left whitespace-pre-wrap md:max-w-[451px] md:text-[18px]/[21.6px]">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-autour text-[16px]/[19.2px] text-espresso text-right whitespace-pre md:text-[20px]/[24px]">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {cta && (
          <PillButton
            href={cta.href}
            className={cn("py-3 text-[18px]/[27px] md:px-8 md:py-4 md:text-[20px]/[30px]", narrowCtaLeft ? "pr-6 pl-[21px]" : "px-6")}
          >
            {cta.label}
          </PillButton>
        )}
      </div>
    </div>
  );
}
