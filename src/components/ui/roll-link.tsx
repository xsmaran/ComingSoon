import Link from "next/link";

/**
 * “LET'S ROLL” link. Desktop: two stacked copies that roll up on hover.
 * Tablet/mobile: a single smaller label centered in the same 154×56 box.
 */
export function RollLink({ href, children }: { href: string; children: React.ReactNode }) {
  const label = "font-chiron font-medium text-brown underline whitespace-pre";
  return (
    <Link href={href} className="group relative flex h-14 w-[154px] items-center justify-center gap-2.5 overflow-clip lg:block">
      <span className={`${label} text-[18px]/[36px] lg:hidden`}>{children}</span>
      <span className="absolute inset-0 hidden lg:block">
        <span className="absolute inset-x-0 top-0 flex flex-col items-center justify-center gap-2.5 transition-transform duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-[66px]">
          <span className={`${label} text-[28px]/[56px]`}>{children}</span>
          <span aria-hidden className={`${label} text-[28px]/[56px]`}>
            {children}
          </span>
        </span>
      </span>
    </Link>
  );
}
