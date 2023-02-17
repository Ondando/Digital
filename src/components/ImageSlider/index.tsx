import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  // Handle function to make!

  // get array of featured games or software
  const FeaturedProducts = [
    {
      id: "God-of-War",
      image:
        "https://res.cloudinary.com/djlawikle/image/upload/v1670372132/god-of-war-ragnarok-jpg_vc5jp0.jpg",
    },
    {
      id: "PSN-PLUS",
      image:
        "https://res.cloudinary.com/djlawikle/image/upload/v1670371858/PSPLus_Julho2022_n9ohot.jpg",
    },
    {
      id: "random",
      image:
        "https://res.cloudinary.com/djlawikle/image/upload/v1670371921/220526-720p-ksf-E1-1_qmcdva.jpg",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="md:h-[800px]  md:w-[1000px]">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {FeaturedProducts.map((e, k) => {
          return (
            <Carousel.Item key={k} style={{ borderRadius: 24 }}>
              <Link href={`/products/${encodeURIComponent(e.id)}`}>
                <Image
                  style={{ borderRadius: 24 }}
                  onClick={() => console.log(e)}
                  width={1000}
                  height={800}
                  src={e.image}
                  alt="First slide"
                  priority
                />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
