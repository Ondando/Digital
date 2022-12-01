import Card, { ICard } from "@ui/Card";

interface ISliderCards {
  cards: ICard[];
}

export default function SliderCards({ cards }: ISliderCards) {
  return (
    <>
      <div className="grid grid-cols-2">
        {cards.map((e: ICard, k) => {
          return (
            <Card
              key={k}
              Price={e.Price}
              Seller={e.Seller}
              ProdutName={e.ProdutName}
              ProductImage={e.ProductImage}
            />
          );
        })}
      </div>
    </>
  );
}
