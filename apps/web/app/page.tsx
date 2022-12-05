'use client';

import { ICard } from '../components/Card';
import ImageSlider from '../components/ImageSlider';
import cardimage from '../assets/cardimage.png';
import SliderCards from '../components/SliderCards';
import PostImage from '../functions/Cloudinary/useCloudinary';
import { CldImage } from 'next-cloudinary';

export default function HomePage() {
    const GodOfWar: ICard = {
        ProdutName: 'God of War',
        ProductImage: cardimage,
        Price: '19,90',
        Seller: 'Joao',
    };
    const Naruto: ICard = {
        ProdutName: 'Naruto Shippuden',
        ProductImage: cardimage,
        Price: '59,99',
        Seller: 'Joao',
    };
    const Recomended: ICard[] = [GodOfWar, Naruto, GodOfWar, Naruto];

    return (
        <div className="md:flex md:flex-row md:justify-around">
            <div>
                <button onClick={PostImage}>ola</button>
                <p>Hot Stuff</p>
                <CldImage width="960" height="600" src="maxresdefault_dbgzzx" sizes="100vw" />

                <ImageSlider />
            </div>
            <div className="md:w-3/12">
                <p>Recomended</p>
                <SliderCards cards={Recomended} />
            </div>
        </div>
    );
}
