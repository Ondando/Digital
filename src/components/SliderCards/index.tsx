import Link from "next/link";
import { ICard, Card } from "../Card";

interface ISliderCards {
  cards: ICard[];
}

export default function SliderCards({ cards }: ISliderCards) {
  return (
    <>
      <div className="grid grid-cols-2 ">
        {cards.map((e: ICard, k) => {
          return (
            <div className="p-1" key={k}>
              <Link href={`/products/${encodeURIComponent(e.ProdutName)}`}>
                <Card
                  Price={e.Price}
                  Seller={e.Seller}
                  ProdutName={e.ProdutName}
                  ProductImage={e.ProductImage}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
