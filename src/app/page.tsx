"use client";
import React, { useEffect, useRef } from "react";
import SliderSection from "./screens/SliderSection";
import FeatuedProductsSection from "./screens/FeatuedProductsSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/context/ContextProvider/store";
import { fetchProducts } from "@/context/ContextProvider/ProductSlice";

export default function Home() {
  const productRef = useRef(false);
  const { entities, loading } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  console.log("loading", loading);
  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts());
    }
    return () => {
      productRef.current = true;
    };
  }, []);

  return (
    <main>
      <div className="h-5 md:h-10" />
      <section>
        <SliderSection />
      </section>
      <div className="h-10" />
      <section>
        <FeatuedProductsSection />
      </section>
    </main>
  );
}
