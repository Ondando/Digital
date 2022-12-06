'use client';

import { ICard } from '../components/Card';
import ImageSlider from '../components/ImageSlider';
import SliderCards from '../components/SliderCards';
import cardimage from '../assets/cardimage.png';

export default function HomePage() {
    const GodOfWar: ICard = {
        ProdutName: 'God of War',
        ProductImage: cardimage,
        Price: '19,90',
        Seller: 'Joao',
    };
    const Naruto: ICard = {
        ProdutName: 'Netlifx',
        ProductImage: cardimage,
        Price: '23,99',
        Seller: 'Joao',
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
