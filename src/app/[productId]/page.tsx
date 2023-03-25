import { GodOfWar } from "@/context/Products";
import { Text } from "@/ui/Text";
import Image from "next/image";

// TODO: SHOW PRODUCT PAGE
export default function Page({ params }: { params: { productId: string } }) {
  //TODO: FETCH GAME DATA BY ID

  // <p>{params.productId}</p>
  return (
    <div className="flex flex-row justify-around">
      <div>
        {/* IMAGE */}
        <Image src={GodOfWar.ProductImage} alt="" height={512} width={512} />
      </div>

      <div>
        {/* Game info */}
        <Text text={GodOfWar.ProdutName} />
        {/* Game Current Seller */}
        <Text text={GodOfWar.Seller} />
        {/* Game price */}
        <Text text={GodOfWar.Price} />
        {/* BUY BUTTON */}
        <button>Comprar</button>
        {/* SECTION WITH: SOME SMALL INFOS. ACTIVATION GUIDE, LANGUANGE? */}
        <div>
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
  );
}
