import TabButton from "./TabButton";
import Avatar from "./Avatar";
import ShopCart from "./ShopCart";
import WishList from "./WishList";
import Searchear from "../Searchear";
import CategoryList from "../CategoryList";
import { Users } from "@/data/dumbData";

export default function Header() {
  const user = Users[0];
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <TabButton />
          <a className="btn-ghost btn text-xl normal-case">Ondando</a>
        </div>
        <div className="navbar-center hidden md:block md:w-96">
          <Searchear />
        </div>
        <div className="navbar-end">
          <ShopCart user={null} />
          <WishList user={null} />
          <Avatar user={null} />
        </div>
      </div>
      <div className="container mx-auto max-w-xs md:hidden ">
        <Searchear />
      </div>
      <div className="hidden justify-center gap-2 md:flex ">
        <CategoryList />
      </div>
    </div>
  );
}
