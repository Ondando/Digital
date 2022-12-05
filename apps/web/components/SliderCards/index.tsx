import { ICard, Card } from '../Card';

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
                            <Card
                                Price={e.Price}
                                Seller={e.Seller}
                                ProdutName={e.ProdutName}
                                ProductImage={e.ProductImage}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
