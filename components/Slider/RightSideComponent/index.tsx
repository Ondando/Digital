import React from 'react';
import Image from 'next/image';
import logonb from '../../../assets/logonb.png';

export default function RightSideComponent() {
  return (
    <div className="flex flex-row justify-between border-2 m-1 p-1">
      <Image src={logonb} layout="fixed" height={300} width={500} alt="TheImage" className="rounded p-2" />
      <div className="p-2 basis-auto">
        <p className="text-md">Um Longo Texto</p>
        <p className="text-md">Texto</p>
      </div>
    </div>
  );
}
