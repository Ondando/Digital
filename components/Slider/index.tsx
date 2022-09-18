import React from 'react';
import Image from 'next/image';
import logonb from '../../assets/logonb.png';

export default function Slider() {
  return (
    <div id="SliderComponent" className="m-4 md:w-fit">
      <p className="text-end text-4xl"> . . . </p>
      <div className="border-2 rounded-md">
        <div className="border md:h-[900px] md:w-[900px]">
          <Image src={logonb} layout="responsive" alt="Logo" />

        </div>

        <div className="flex flex-row justify-between h-12 p-2">

          <p className="text-1xl">Nome do produto</p>
          <p className="text-2xl">| 12.500 kzs</p>

        </div>

      </div>
    </div>
  );
}
