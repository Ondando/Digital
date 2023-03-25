import { Card } from "@/components/Card";
import { FeaturedProducts } from "@/data/dumbData";

export default function FeatuedProductsSection() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="hidden md:block">
        <div className=" md:grid md:grid-cols-6 md:gap-2">
          {FeaturedProducts.map((e, k) => {
            return <Card key={k} name={e.name} image={e.assets[0]} />;
          })}
        </div>
      </div>
      <div className="carousel rounded-box m-5 h-52   gap-2 md:hidden">
        {FeaturedProducts.map((e, k) => {
          return (
            <div className="carousel-item w-fit border-2" key={k}>
              <Card key={k} name={e.name} image={e.assets[0]} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
