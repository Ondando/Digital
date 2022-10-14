import React, { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Slider from "../components/Slider";
import RightSideComponent from "../components/Slider/RightSideComponent";

import Produtos from "../components/Produtos";

import Context, { ContextProvider } from "../context";

interface ISectionText {
  Texto: string;
}
function SectionText({ Texto }: ISectionText) {
  return <p className="font-mono m-2 text-2xl">{Texto}</p>;
}

export default function Home() {
  const {HotStuff} = useContext(Context);
  return (
    <ContextProvider>
      <Head>
        <title>Ondando Digital</title>
        <meta name="description" content="Ondando - Digital Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="m-1 md:container md:mx-auto">
        <SectionText Texto={HotStuff} />
        <div id="SliderSection" className="md:flex md:flex-row">
          <div id="LeftWithImage">
            <Slider />
          </div>

          <div id="RightWithComponents">
            <div className="md:pt-14 space-y-10">
              <SectionText Texto="Recomendacoes" />
              <RightSideComponent
                Header="Coming Soon"
                LongText="adisaiadhsid"
              />
              <RightSideComponent
                Header="Coming Soon"
                LongText="adisaiadhsid"
              />
              <RightSideComponent
                Header="Coming Soon"
                LongText="adisaiadhsid"
              />
            </div>
          </div>
        </div>
        <div id="ProdutosEmMaisVendidos">
          <SectionText Texto="Mais Vendidos" />
          <Produtos />
        </div>
      </main>
      <footer />
    </ContextProvider>
  );
}
