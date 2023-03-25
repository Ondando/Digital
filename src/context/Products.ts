import { ICarouselContent } from "@/components/Carousel";

export const GodOfWar: ICard = {
  ProdutName: "God of War",
  ProductImage:
    "https://res.cloudinary.com/djlawikle/image/upload/v1670261585/godofwar_y7nxra.webp",
  Price: "19,90",
  Seller: "Joao",
};
export const Netlifx: ICard = {
  ProdutName: "Netlifx",
  ProductImage:
    "https://res.cloudinary.com/djlawikle/image/upload/v1670261691/netflix_isyp77.jpg",
  Price: "23,99",
  Seller: "Joao",
};
export const Naruto: ICard = {
  ProdutName: "Naruto",
  ProductImage:
    "https://res.cloudinary.com/djlawikle/image/upload/v1670261691/netflix_isyp77.jpg",
  Price: "23,99",
  Seller: "Joao",
};

export interface ICard {
  // ProductID:string;
  ProdutName: string;
  ProductImage: string | any;
  Seller: string;
  Price: string;
}
export const FeaturedProducts: ICard[] = [Naruto, GodOfWar, Naruto, GodOfWar];
export const products = [
  Naruto,
  GodOfWar,
  Naruto,
  GodOfWar,
  Naruto,
  GodOfWar,
  Naruto,
  GodOfWar,
  Naruto,
  GodOfWar,
  Naruto,
  GodOfWar,
];

export const SliderProducts: ICard[] = [Netlifx, GodOfWar, Netlifx, GodOfWar];

export const SliderProductss: ICarouselContent[] = [
  { ContentImage: GodOfWar.ProductImage, ContentLink: GodOfWar.ProdutName },
  { ContentImage: Netlifx.ProductImage, ContentLink: Netlifx.ProdutName },
  { ContentImage: Naruto.ProductImage, ContentLink: Naruto.ProdutName },
  { ContentImage: GodOfWar.ProductImage, ContentLink: GodOfWar.ProdutName },
];

// main user interface
interface IUserAcount {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  sellerAccount: ISeller;
  buyerAccount: IBuyer;
}

// product interface
interface IProduct {
  name: string;
  longDescription: string;
  shortDescription: string;
  assets: string[];
  videosLink: videoLink[];
  activeSelling: ISell[];
}
interface videoLink {
  platform: string;
  link: string;
}

interface ISeller {
  userAccount: IUserAcount;
  sells: ISell[];
}
// to track who is selling and how many
interface ISell {
  seller: ISeller;
  product: IProduct;
  price: number;
}

interface IBuyer {
  userAccount: IUserAcount;
  transactions: ITransaction[];
}

interface ITransaction {
  sell: ISell;
  buyer: IBuyer;
  status: ITransactionStatus;
  data: string;
}

enum ITransactionStatus {
  "ACTIVE",
  "IN_ACTIVE",
  "AWAIT_PAYMENT",
  "UNDER_REVIEW",
}
