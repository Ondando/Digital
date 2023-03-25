import { Sell } from "../ISeller";

export interface Product {
  name: string;
  longDescription: string;
  shortDescription: string;
  assets: string[];
  videosLink: VideoLink[];
  activeSelling: Sell[];
  platform?: ProductPlatform;
}

export interface VideoLink {
  platform: string;
  link: string;
}

export enum ProductPlatform {
  PS4 = "PS4",
  PS5 = "PS5",
  PC = "PC",
  NITENDO = "NITENDO",
}
