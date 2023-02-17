import CategoryList from "./CategoryList";
import Searcher from "../../components/Searchear";

import { AiOutlineMenu } from "react-icons/ai";
import { AvatarButton } from "@/ui/Icons/AvatarButton";
import { ShopCartButton } from "@/ui/Icons/ShopCartButton";
import { WishlistLoveButton } from "@/ui/Icons/WishlistLoveButton";

export default function Header() {
  return (
    <div className="md:container md:mx-auto ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <label className="drawer-button  md:hidden" htmlFor="my-drawer">
            <AiOutlineMenu size={24} />
          </label>
          <div>
            <p>Ondando</p>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <Searcher />
        </div>
        <div className="flex flex-row gap-2">
          <WishlistLoveButton />
          <AvatarButton />
          <ShopCartButton />
        </div>
      </div>
      <div>
        <div className="md:hidden">
          <Searcher />
        </div>
        <div className="hidden md:block">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
