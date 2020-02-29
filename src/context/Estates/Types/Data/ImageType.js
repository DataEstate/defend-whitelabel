// @flow

import type { ImageVariantType } from "./ImageVariantType";

export type ImageType = {
  path: string,
  dimension?: string,
  orientation?: "LANDSCAPE" | "PORTRAIT" | "PANORAMIC" | "SQUARE",
  alt?: string,
  caption?: string,
  author?: string,
  copyright?: string,
  sizes?: {
    thumb?: ImageVariantType,
    small?: ImageVariantType,
    medium?: ImageVariantType,
    large?: ImageVariantType
  }
};
