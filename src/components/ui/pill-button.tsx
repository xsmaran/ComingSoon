import Link from "next/link";
import { cn } from "@/lib/cn";

type PillButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Orange pill with a 3px brown outline and the chunky 8px brown drop shadow used across the page.
 * Size/typography differs per placement, so pass padding + text classes via `className`.
 */
export function PillButton({ href, children, className }: PillButtonProps) {
  const classes = cn(
    "inset-border relative inline-flex w-min items-center justify-center gap-2.5 rounded-[100px] bg-orange font-chiron font-bold whitespace-pre text-brown shadow-press [--border-color:var(--color-brown)] [--border-width:3px]",
    "transition-[transform,box-shadow] duration-200 ease-out hover:translate-y-[3px] hover:shadow-[0_5px_0_0_var(--color-brown)] active:translate-y-[8px] active:shadow-none",
    className,
  );
  if (!href) return <span className={classes}>{children}</span>;
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Solid brown pill (the “All stories” style) for secondary actions. */
export function BrownPill({ href, children, className }: PillButtonProps) {
  const classes = cn(
    "flex w-min items-center justify-center rounded-[100px] bg-brown px-7 py-4 font-chiron text-[20px]/[24px] font-bold whitespace-pre text-white transition-opacity duration-200 hover:opacity-90",
    className,
  );
  if (!href) return <span className={classes}>{children}</span>;
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
