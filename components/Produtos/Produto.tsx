import Image from 'next/image';
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import logonb from '../../assets/logonb.png';

interface IProduto {
  Valor: string
}
export default function Produto({ Valor }:IProduto) {
  return (
    <div id="Produto" className="border-2 rounded-md">
      <Image src={logonb} alt="" className="border-1 rounded-md" />
      <p />
      <div className="flex flex-row justify-between">
        <p>{ Valor}</p>
        <div className="flex flex-row">
          <button type="button">
            <FaHeart />
          </button>
          <button type="button">
            <FaShoppingCart />
          </button>

        </div>
      </div>

    </div>
  );
}
