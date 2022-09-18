import React from 'react';
import Image from 'next/image';
import logonb from '../../../assets/logonb.png';

interface IRightSideComponent {
  Header: String
  LongText:String
}
export default function RightSideComponent({ Header, LongText }:IRightSideComponent) {
  return (
    <button type="button">
      <div className="flex flex-row  border-2 m-1 p-1">
        <Image src={logonb} layout="fixed" height={150} width={200} alt="TheImage" className="rounded p-2" />
        <div className="p-2 ">
          <p className="text-sm">{ Header}</p>
          <p className="text-sm">{ LongText}</p>
        </div>
      </div>
    </button>
  );
}
