import Image from "next/image";
import type { ImageAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";

type FillImageProps = {
  image: ImageAsset;
  alt?: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  objectPosition?: string;
};

/** Absolutely-positioned, cover-fitted image — the way Framer renders background/fill images. */
export function FillImage({
  image,
  alt = "",
  sizes,
  className,
  imgClassName,
  priority,
  objectPosition,
}: FillImageProps) {
  return (
    <div className={cn("absolute inset-0 rounded-[inherit]", className)}>
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("rounded-[inherit] object-cover", imgClassName)}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
