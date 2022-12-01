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
    <div>
      <div>
        <Image alt={ProdutName} src={ProductImage} height={250} width={180} />
      </div>
      <div>
        <p>{ProdutName}</p>
        <p>{Seller}</p>
        <p>{Price}</p>
      </div>
    </div>
  );
}
