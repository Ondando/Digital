import SliderSection from "./screens/SliderSection";
import FeatuedProductsSection from "./screens/FeatuedProductsSection";

export default function Home() {
  return (
    <main className="p-5">
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
