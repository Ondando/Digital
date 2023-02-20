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
