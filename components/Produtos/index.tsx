import React from 'react';
import Produto from './Produto';

export default function Produtos() {
  const ProdutosLista = ['12.500Kzs', '9.900Kzs', '2.100Kzs', '3.000Kzs'];
  return (
    <div id="Produtos" className="grid grid-cols-2">
      {ProdutosLista.map((e, i) => <Produto key={i} Valor={e} />)}
    </div>
  );
}
