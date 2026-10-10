import { cn } from "@/lib/cn";

/** The typographic wordmark used on nookaa.in. */
export function BrandLogo({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("nookaa-logo", className)}>
    <span className="nookaa-logo__name">NOOKAA</span>
    <span className="nookaa-logo__tagline">Beverages &amp; Beyond</span>
  </span>;
}
