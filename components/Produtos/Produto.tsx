import Image from 'next/image';
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import logonb from '../../assets/logonb.png';

interface IProduto {
  Imagem:any
  Valor: string
}
export default function Produto({ Valor, Imagem }:IProduto) {
  return (
    <div id="Produto" className="border-1 rounded-md">
      <Image src={Imagem || logonb} alt="" className="border-1 rounded-md" />
      <p />
      <div className="flex flex-row justify-between mx-2">
        <p>{ Valor}</p>
        <div className="flex flex-row gap-3  ">
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