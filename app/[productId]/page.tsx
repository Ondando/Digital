"use client";
import { useState } from "react";
import GodOfWar from "contexts/games/goofwar";
import SpiderMan from "contexts/games/spiderman";
import IProduct from "interfaces/IProduct";

interface IProductPage {
  params?: { productId: string };
}

export default function ProductPage({ params }: IProductPage) {
  const productId = params.productId;
  const Games: IProduct[] = [GodOfWar, SpiderMan];
  const [Product, setProduct] = useState<IProduct>();
  console.log(params.productId);

  return (
    <div>
      {Product && (
        <>
          <div key={Product.id}>
            <div>
              <p>Image and video caroussel/slider </p>
              <p>{Product.name}</p>
              <p>{Product.platform}</p>
            </div>
            <div>
              <p>activation rule</p>
              <p>Game Info</p>
              <p>Seller info</p>
              <p>Price</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
