import Image from "next/image";

export interface ICard {
  ProdutName: string;
  ProductImage: string | any;
  Seller: string;
  Price: string;
}

export default function Card({
  ProdutName,
  ProductImage,
  Seller,
  Price,
}: ICard) {
  return (
    <div className="p-1 border rounded">
      <div className="relative h-64 w-full">
        <Image alt={ProdutName} src={ProductImage} fill />
      </div>
      <div>
        <p>{ProdutName}</p>
        <p>{Seller}</p>
        <p>{Price}</p>
      </div>
    </div>
  );
}
