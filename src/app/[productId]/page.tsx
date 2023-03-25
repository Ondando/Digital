import SliderSectionon from "@/app/screens/SliderSection";
import Carousel from "@/components/Carousel";
import { GodOfWar, Netlifx } from "@/context/Products";
import Image from "next/image";

// TODO: SHOW PRODUCT PAGE
export default function Page({ params }: { params: { productId: string } }) {
  //TODO: FETCH GAME DATA BY ID

  // <p>{params.productId}</p>
  return (
    <div>
      <div className="flex flex-row justify-around">
        <div>
          {/* IMAGE */}
          <Image src={GodOfWar.ProductImage} alt="" height={50} width={50} />
        </div>

        <div>
          {/* Game info */}
          <p>{GodOfWar.ProdutName}</p>
          {/* Game Current Seller */}
          <p>{GodOfWar.Seller}</p>
          {/* Game price */}
          <p>{GodOfWar.Price}</p>
          {/* BUY BUTTON */}
          <button className="btn">Comprar</button>
          {/* SECTION WITH: SOME SMALL INFOS. ACTIVATION GUIDE, LANGUANGE? */}
          <div className="flex flex-row gap-2">
            <p>Activation Guide</p>
            <p>Languange</p>
          </div>
          {/* BIG GAME DESCRIPTION */}
          <div>
            <p>{GodOfWar.ProdutName}</p>
          </div>
          <div>
            <ul>
              <li>{GodOfWar.Seller}</li>
              <li>{GodOfWar.Seller}</li>
            </ul>
          </div>
          {/* OTHERS SELLERS SELLING THE SAME PRODUCT WITH DIFERENT PRICE OR SAME */}
          {/* GAMES THAT THE CUSTOMER MAY LIKE */}
        </div>
      </div>
    </div>
  );
}
