import Image from "next/image";
import { isDoodleAsset, type ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";

type FramedImageProps = {
  image: ImageAsset;
  alt: string;
  sizes: string;
  /** Frame color (CSS value). */
  frame?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
};

/** Photo with a thick rounded frame drawn on top (like the “best people” photo stack). */
export function FramedImage({
  image,
  alt,
  sizes,
  frame = "var(--color-bark)",
  className,
  priority,
  objectPosition,
}: FramedImageProps) {
  return (
    <div
      className={cn("inset-border relative overflow-hidden rounded-3xl [--border-width:7px] md:[--border-width:8px]", className)}
      style={{ "--border-color": frame } as React.CSSProperties}
    >
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={image.src.startsWith("/brand/")}
        className={cn("rounded-[inherit]", isDoodleAsset(image) ? "bg-[#f5f1e9] object-contain p-6" : "object-cover")}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
