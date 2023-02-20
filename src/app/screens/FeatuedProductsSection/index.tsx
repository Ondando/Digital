import { Card } from "@/components/Card";
import { FeaturedProducts, products } from "@/context/Products";

export default function FeatuedProductsSection() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="hidden md:block">
        <div className=" md:grid md:grid-cols-6 md:gap-2">
          {products.map((e, k) => {
            return (
              <Card
                key={k}
                ProdutName={e.ProdutName}
                ProductImage={e.ProductImage}
                Seller={e.Seller}
                Price={e.Price}
              />
            );
          })}
        </div>
      </div>
      <div className="carousel rounded-box m-5 h-52   gap-2 md:hidden">
        {FeaturedProducts.map((e, k) => {
          return (
            <div className="carousel-item w-fit border-2" key={k}>
              <Card
                ProdutName={e.ProdutName}
                ProductImage={e.ProductImage}
                Seller={e.Seller}
                Price={e.Price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
