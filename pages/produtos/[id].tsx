import React from "react";
// import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";

export default function produto() {
  const Data = {
    Imagens: "",
    Titulo: "",
    Descricao: "",
    Price: 1000,
  };

  return (
    <>
      <Head>
        <title>Ondando Digital</title>
      </Head>
      <Header />
      <main>
        <Image
          layout="fixed"
          height={50}
          width={50}
          src={require("../../assets/Games/CyberPunk/cover.png")}
        />

        <p>{Data.Titulo}</p>
        <div className="flex-row flex justify-between">
          <p>Some info logos</p>
          <p>Love Button</p>
        </div>
        <p>ContriRestr</p>
        <div>
          <p>
            {Data.Price}
            {" Kzs"}
          </p>
        </div>
        <div>
          <button type="button">Buy Now</button>
        </div>
        <button type="button">Add Cart</button>
        <p>sold by jojioj</p>
        <p>90% of 12.207 </p>

        <p>Activation</p>
        <p>GO to product description</p>
        <p>Other Sellers</p>
        <div>
          <div>
            <p>name</p>
            <p>rating </p>
          </div>
          <p>Price</p>
        </div>
        <div>
          <p>Ratings</p>
          <p>Ratings</p>
          <p>Ratings</p>
          <p>Ratings</p>
        </div>
        <div>
          <p>You May also like</p>
        </div>
      </main>

      <footer />
    </>
  );
}
