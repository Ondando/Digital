import React from 'react';
import Produto from './Produto';
import CyberPunlCoverImage from '../../assets/Games/CyberPunk/cover.png';

export default function Produtos() {
  const ProdutosLista = [
    {
      title: 'CyberPunk',
      price: '12.500Kzs',
      Image: CyberPunlCoverImage,
      key: 1,
    },
    {
      title: 'CyberPunk',
      price: '12.500Kzs',
      Image: CyberPunlCoverImage,
      key: 2,
    }, {
      title: 'CyberPunk',
      price: '12.500Kzs',
      Image: CyberPunlCoverImage,
      key: 3,
    },
  ];
  return (
    <div id="Produtos" className="grid grid-cols-2 gap-2">
      {ProdutosLista.map((e) => <Produto key={e.key} Imagem={e.Image} Valor={e.price} />)}
    </div>
  );
}
