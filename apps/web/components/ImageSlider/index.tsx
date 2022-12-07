import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const SliderImages = [
        'https://res.cloudinary.com/djlawikle/image/upload/v1670372132/god-of-war-ragnarok-jpg_vc5jp0.jpg',
        'https://res.cloudinary.com/djlawikle/image/upload/v1670371921/220526-720p-ksf-E1-1_qmcdva.jpg',
        'https://res.cloudinary.com/djlawikle/image/upload/v1670371858/PSPLus_Julho2022_n9ohot.jpg',
    ]; // get array of featured games or software
    // Handle function to make!

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="md:h-[800px]  md:w-[1000px]">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {SliderImages.map((e, k) => {
                    return (
                        <Carousel.Item key={k} style={{ borderRadius: 24 }}>
                            <Image
                                style={{ borderRadius: 24 }}
                                onClick={() => console.log(e)}
                                width={1000}
                                height={800}
                                src={e}
                                alt="First slide"
                                priority
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}
