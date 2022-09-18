import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Slider from '../components/Slider';
import RightSideComponent from '../components/Slider/RightSideComponent';

import logonb from '../assets/logonb.png';
import Produtos from '../components/Produtos';

interface ISectionText {
  Texto:string
}
function SectionText({ Texto }:ISectionText) {
  return (<p>{Texto}</p>);
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <>
    <Head>
      <title>Ondando Digital</title>
      <meta name="description" content="Ondando - Digital Marketplace" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main className="m-1 md:container md:mx-auto">
      <SectionText Texto="HOT STUFF" />
      <div id="SliderSection" className="md:flex md:flex-row">
        <div id="LeftWithImage">
          <Slider />
        </div>

        <div id="RightWithComponents">
          <div className="md:pt-14 space-y-10">
            <RightSideComponent />
            <RightSideComponent />
            <RightSideComponent />
          </div>
        </div>
      </div>
      <div id="ProdutosEmMaisVendidos">
        <SectionText Texto="Mais Vendidos" />
        <Produtos />
      </div>
      <div id="Banners">
        <div className="text-center p-2 border-2">
          <Image src={logonb} />
          <button type="button" className=" rounded-md bg-blue-400 text-3xl p-2">Mostrar Mais</button>
        </div>

      </div>

    </main>

    <footer />
  </>
);

export default Home;
