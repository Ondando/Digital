import { Card } from "@/components/Card";
import Carousel from "@/components/Carousel";
import { SideSectionProducts, CarouselProducts } from "@/data/dumbData";

export default function SliderSection() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-6  md:grid-rows-2 ">
      <div className="col-span-full row-span-1 md:col-span-4 md:row-span-2">
        <Carousel CarouselContents={CarouselProducts} />
      </div>
      {SideSectionProducts.map((e, k) => {
        return <Card key={k} name={e.name} image={e.image} />;
      })}
    </div>
  );
}
