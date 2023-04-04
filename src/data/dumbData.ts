import usersDumbData from "./dumbData/usersDumbData.json";
import productsDumbData from "./dumbData/productsDumbData.json";
import sellDumbData from "./dumbData/sellDumbData.json";

import { ICarouselContent } from "@/components/Carousel";

export const Categorias = ["PC", "XBOX", "PS", "NEWS", "DAILY DEALS"];

export const Users: any[] = usersDumbData;

export const AllProducts: any[] = productsDumbData;

export const CarouselProducts: ICarouselContent[] = [
  {
    ContentImage: productsDumbData[0].assets[0],
    ContentLink: `${productsDumbData[0]}`,
  },
  {
    ContentImage: productsDumbData[1].assets[0],
    ContentLink: `${productsDumbData[1]}`,
  },
  {
    ContentImage: productsDumbData[2].assets[0],
    ContentLink: `${productsDumbData[2]}`,
  },
  {
    ContentImage: productsDumbData[3].assets[0],
    ContentLink: `${productsDumbData[3]}`,
  },
];
interface ISideSectionProducts {
  image: string;
  name: string;
  price: number;
}
export const SideSectionProducts: ISideSectionProducts[] = [
  {
    image: AllProducts[0].assets[0],
    name: AllProducts[0].name,
    price: AllProducts[0]?.activeSelling[0]?.price,
  },
  {
    image: AllProducts[1].assets[0],
    name: AllProducts[1].name,
    price: AllProducts[1]?.activeSelling[0]?.price,
  },
  {
    image: AllProducts[2].assets[0],
    name: AllProducts[2].name,
    price: AllProducts[2]?.activeSelling[0]?.price,
  },
  {
    image: AllProducts[3].assets[0],
    name: AllProducts[3].name,
    price: AllProducts[3]?.activeSelling[0]?.price,
  },
];

export const FeaturedProducts: any[] = [
  AllProducts[0],
  AllProducts[1],
  AllProducts[2],
  AllProducts[3],
  AllProducts[0],
  AllProducts[1],
  AllProducts[2],
  AllProducts[3],
];

export const Sells: any[] = sellDumbData;
