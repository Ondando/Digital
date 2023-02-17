import Image from "next/image";

export interface ICard {
  ProdutName: string;
  ProductImage: string | any;
  Seller: string;
  Price: string;
}

export const Card = ({ ProdutName, ProductImage, Seller, Price }: ICard) => {
  return (
    <div className="rounded border p-1">
      <div className="relative h-64 w-full">
        <Image alt={ProdutName} src={ProductImage} fill sizes="24" />
      </div>
      <div>
        <p>{ProdutName}</p>
        <p>{Seller}</p>
        <p>{Price}</p>
      </div>
    </div>
  );
};
