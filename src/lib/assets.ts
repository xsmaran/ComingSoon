import generatedDoodles from "./doodles.json";

/**
 * Every image and video used on the page.
 *
 * By default files are loaded from Framer's CDN (exactly what the original site uses).
 * To self-host them, run `npm run assets:download` (copies everything into /public/framer)
 * and set NEXT_PUBLIC_LOCAL_ASSETS=1 in your environment.
 */
const LOCAL = process.env.NEXT_PUBLIC_LOCAL_ASSETS === "1";
const CDN = "https://framerusercontent.com";

/** `path` is relative to the CDN root, e.g. "images/abc.png" or "assets/clip.mp4". */
export function asset(path: string) {
  return LOCAL ? `/framer/${path}` : `${CDN}/${path}`;
}

export type ImageAsset = { src: string; width: number; height: number; fit?: "cover" | "contain" };

export const doodles = Object.fromEntries(
  Object.entries(generatedDoodles).map(([key, image]) => [key, { ...image, fit: "contain" as const }]),
) as Record<keyof typeof generatedDoodles, ImageAsset>;

export const isDoodleAsset = (image: ImageAsset) => image.fit === "contain";

function img(file: string, width: number, height: number): ImageAsset {
  return { src: asset(`images/${file}`), width, height };
}

/** Approved brand originals. Keep their pixels, colours and proportions unchanged. */
const mascot: ImageAsset = { src: "/brand/otter-mascot.png", width: 457, height: 453 };
const storeExterior: ImageAsset = { src: "/brand/store-exterior.jpeg", width: 1600, height: 900 };
const storeCounter: ImageAsset = { src: "/brand/store-interior-counter.jpeg", width: 1600, height: 900 };
const storeSeating: ImageAsset = { src: "/brand/store-interior-seating.jpeg", width: 1600, height: 900 };

export const images = {
  mascot,
  storeExterior,
  storeCounter,
  storeSeating,
  sticker: img("KC3nUvLHFCakuLPKcNFjvjHpb4M.png", 500, 499),
  stickerCoffee: img("FhFmU2cQjvGW4sDtIsgZRSarg8.png", 133, 151),
  asterisk: img("EoIPN8fcgLhmiox8tEOc3RKqUCg.png", 1048, 1140),
  audience1: doodles.mug,
  audience2: doodles.laptop,
  audience3: doodles.student,
  scallopEdge: img("vMXRPFBxgqFAHLQkDMVuVu3dqPc.png", 5856, 287),
  gridPattern: img("HeviB0Hr9n08JSxcP7Vk4cEpcmw.png", 5760, 3972),
  benefit3: img("Z5HPfz3WtilyUrN2rYOprmf2Zn8.png", 1344, 756),
  prideDesktop: img("fgyDviBrznq1LKopfkddHu1QeI.png", 5772, 3344),
  prideMobile: img("YFoBpeWSr7btUGgy6Cs65jZm70Y.png", 1600, 2400),
  people1: img("sIqnpyHuT6e6aZoqHyYmPaebQ.png", 1024, 1024),
  people2: img("AfD4EbqRzNrhsVbHEzAHH0bcQ0.png", 1024, 1024),
  people3: img("7IgyG3qpsmBBwGtF0ilsZoosdTA.png", 1024, 1024),
  avatarOlivia: img("XjqhfE0v3hM6NYwybSFPDop20.png", 280, 280),
  avatarMark: img("nm2mYoxEyEZzKJYHLkucJLEaax0.png", 280, 280),
  avatarGary: img("YbO5JEDzRCy69RTBqomXZQyHQ.png", 280, 280),
  blog1: storeCounter,
  blog2: doodles.baker,
  blog3: img("YR8iXua90QcbCx6p80yVpjKXQc.png", 1277, 768),
  diamondStrip: img("USL9jvPb1knVcNUMoGA3AZV47iI.png", 5760, 136),
  // Non-character stickers that cycle inside the patterned "menu" backdrop (characters are the <Otter> mascot).
  illoFuelUp: img("yEezMicUYqc7f6Mxzt8wKidjd20.png", 940, 940),
  illoHello: img("DwSBVzhDzaRLpnkkB6QMjXnMY.png", 811, 571),
  illoTime: img("oTHE30568GkxuGvLjZLSgm1euRU.png", 814, 987),
  illoBag: img("PCGwwLkk3kdFTYZ3dZugYgnRo.png", 634, 828),
} satisfies Record<string, ImageAsset>;

export const videos = {
  testimonial1: asset("assets/Sdyc9uggMlNauakHU5S6vkDLw.mp4"),
  testimonial2: asset("assets/rvvv13crgl6U3ZvCmTYm6SfKw.mp4"),
  testimonial3: asset("assets/GHNldwXqSVz9RC8gIVPr7lc.mp4"),
};
