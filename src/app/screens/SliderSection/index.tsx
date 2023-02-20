import { Card } from "@/components/Card";
import Carousel from "@/components/Carousel";
import { SliderProducts } from "@/context/Products";

export default function SliderSection() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-6  md:grid-rows-2 ">
      <div className="col-span-full row-span-1 md:col-span-4 md:row-span-2">
        <Carousel />
      </div>
      <Card
        ProdutName={SliderProducts[1].ProdutName}
        ProductImage={SliderProducts[1].ProductImage}
        Seller={SliderProducts[0].Seller}
        Price={SliderProducts[0].Price}
      />
      <Card
        ProdutName={SliderProducts[1].ProdutName}
        ProductImage={SliderProducts[1].ProductImage}
        Seller={SliderProducts[0].Seller}
        Price={SliderProducts[0].Price}
      />
      <Card
        ProdutName={SliderProducts[0].ProdutName}
        ProductImage={SliderProducts[1].ProductImage}
        Seller={SliderProducts[0].Seller}
        Price={SliderProducts[0].Price}
      />
      <Card
        ProdutName={SliderProducts[0].ProdutName}
        ProductImage={SliderProducts[0].ProductImage}
        Seller={SliderProducts[0].Seller}
        Price={SliderProducts[0].Price}
      />
    </div>
  );
}
