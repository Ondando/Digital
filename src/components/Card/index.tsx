import { Text } from "@/ui/Text";
import Link from "next/link";

export interface ICard {
  ProdutName: string;
  ProductImage: string | any;
  Seller: string;
  Price: string;
}

//TODO: MAKE CARD OnHover BETTER

export const Card = ({ ProdutName, ProductImage, Seller, Price }: ICard) => {
  return (
    <Link
      href={`/${ProdutName.replaceAll(" ", "")}-${Seller}`}
      className=" card card-compact mx-auto w-full bg-base-100 shadow-md hover:scale-110 md:max-h-56 md:w-11/12"
    >
      <figure>
        <img src={ProductImage} alt={ProdutName} className="h-48" />
      </figure>
      <div className=" card-body">
        <Text text={ProdutName} />
      </div>
    </Link>
  );
};
