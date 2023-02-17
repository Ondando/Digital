"use client";

import { ICard } from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import SliderCards from "../components/SliderCards";

export default function HomePage() {
  const GodOfWar: ICard = {
    ProdutName: "God of War",
    ProductImage:
      "https://res.cloudinary.com/djlawikle/image/upload/v1670261585/godofwar_y7nxra.webp",
    Price: "19,90",
    Seller: "Joao",
  };
  const Naruto: ICard = {
    ProdutName: "Netlifx",
    ProductImage:
      "https://res.cloudinary.com/djlawikle/image/upload/v1670261691/netflix_isyp77.jpg",
    Price: "23,99",
    Seller: "Joao",
  };
  const Recomended: ICard[] = [GodOfWar, Naruto, GodOfWar, Naruto];

  return (
    <div className="md:flex md:flex-row md:justify-around">
      <div>
        <p>Hot Stuff</p>
        <ImageSlider />
      </div>
      <div className="md:w-3/12">
        <p>Recomended</p>
        <SliderCards cards={Recomended} />
      </div>
    </div>
  );
}
