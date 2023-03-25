import { Text } from "@/ui/Text";
import Image from "next/image";
import { AllProducts, Sells } from "@/data/dumbData";

// TODO: SHOW PRODUCT PAGE
export default function Page({ params }: { params: { productId: string } }) {
  //TODO: FETCH GAME DATA BY ID
  const product = AllProducts[0];

  // <p>{params.productId}</p>
  return (
    <div className="flex flex-row justify-around">
      <div>
        {/* IMAGE */}
        <Image src={product.assets[0]} alt="" height={512} width={512} />
      </div>

      <div>
        {/* Game info */}
        <Text text={product.name} />
        {/* Game Current Seller */}
        <Text text={`${Sells[0].seller}`} />
        {/* Game price */}
        <Text text={`${Sells[0].price}`} />
        {/* BUY BUTTON */}
        <button>Comprar</button>
        {/* SECTION WITH: SOME SMALL INFOS. ACTIVATION GUIDE, LANGUANGE? */}
        <div>
          <p>Activation Guide</p>
          <p>Languange</p>
        </div>
        {/* BIG GAME DESCRIPTION */}
        <div>
          <p>{product.longDescription}</p>
        </div>
        <div>
          <Text text={`Others ${Sells.length} Sellers`} />
        </div>
        {/* OTHERS SELLERS SELLING THE SAME PRODUCT WITH DIFERENT PRICE OR SAME */}
        {/* GAMES THAT THE CUSTOMER MAY LIKE */}
      </div>
    </div>
  );
}
