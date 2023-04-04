import { BoldSemiLargeText, PriceText, Text } from "@/ui/Text";
import Image from "next/image";
import { AllProducts, Sells } from "@/data/dumbData";

// TODO: SHOW PRODUCT PAGE
export default function Page({ params }: { params: { productId: string } }) {
  //TODO: FETCH GAME DATA BY ID
  const product = AllProducts[0];

  // <p>{params.productId}</p>
  return (
    <div className="m-2">
      <div className="gap-20  md:flex md:flex-row md:justify-center ">
        <div className=" m-1 rounded-md border p-1">
          {/* IMAGE */}
          <Image src={product.assets[0]} alt="" height={412} width={512} />
        </div>

        <div className="m-1 rounded-md border p-1 text-center md:w-72">
          <div className="h-12" />
          {/* Game info */}
          <div>
            <BoldSemiLargeText text={product.name} />
          </div>
          {/* Game Current Seller */}
          <div className="m-2">
            <Text text={`Vendido por: ${Sells[0].seller}`} />
          </div>
          {/* Game price */}
          <div className="m-2">
            <PriceText text={`${Sells[0].price}`} />
          </div>
          {/* BUY BUTTON */}
          <div className="m-2 flex flex-col justify-center gap-4">
            <button className="btn-sm btn">Adicionar</button>
            <button className="btn-sm btn">Comprar Agora</button>
          </div>
          {/* SECTION WITH: SOME SMALL INFOS. ACTIVATION GUIDE, LANGUANGE? */}
          <div className="flex flex-row justify-center gap-2">
            <p>Activation Guide</p>
            <p>Languange</p>
          </div>
        </div>
      </div>
      <div>
        {/* BIG GAME DESCRIPTION */}
        <div>
          <Text text={`${product.longDescription}`} />
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
