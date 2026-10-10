import Image from "next/image";
import { cn } from "@/lib/cn";
import { doodles } from "@/lib/assets";

/** Each website topic has its own transparent, reference-based otter doodle. */
export type OtterVariant =
  | "barista" | "mug" | "student" | "skater" | "laptop" | "baker"
  | "reader" | "inspector" | "empty" | "waiter" | "scooter" | "smile";

type OtterProps = {
  variant: OtterVariant;
  /** Omit for a decorative mascot beside text. */
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Original brand identity redrawn in a consistent minimal editorial style.
 * Render the topic-specific pose in full, with no crop or distortion.
 */
export function Otter({ variant, label, className, priority = false, sizes = "200px" }: OtterProps) {
  const art = doodles[variant];
  return (
    <Image
      src={art.src}
      width={art.width}
      height={art.height}
      alt={label ?? ""}
      sizes={sizes}
      preload={priority}
      className={cn("otter block h-full w-full object-contain", className)}
    />
  );
}
