import React, { useContext, useState } from "react";
import { FaBars, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { CategoryContext } from "../../context";
import SearcherContext, {
  SearcherProvider,
} from "../../context/SearcherContext";
import Drawer from "../Drawer";

function Searcher() {
  const [Search, setSearch] = useContext(SearcherContext);
  return (
    <SearcherProvider>
      <div>
        <div className="flex flex-row justify-between px-2 items-center m-2 border-2 rounded-full">
          <input
            placeholder="Procurar..."
            className="w-full"
            onChange={(v) => {
              const val = v.currentTarget.value;
              setSearch(val);
              console.log(Search);
            }}
          />
          <FaSearch />
        </div>
      </div>
    </SearcherProvider>
  );
}

export default function Header() {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const CategoriaContext = useContext(CategoryContext);

  return (
    <div className="mx-auto container">
      <div className=" flex flex-row items-center justify-between m-2">
        <div className="flex flex-row gap-2">
          <FaBars
            className="md:hidden"
            size={24}
            onClick={() => setDrawerOpen(true)}
          />
          <p>Digital</p>
        </div>
        <div className="hidden md:block w-1/2">
          <Searcher />
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div>
            <FaShoppingCart size={24} />
          </div>
          <FaHeart
            size={24}
            onClick={() => (window.location.href = "/whislist")}
          />
          <IoMdPerson size={24} />
        </div>
      </div>
      <div className="md:hidden">
        <Searcher />
      </div>
      <div className="w-full border m-1" />
      <div className="hidden  md:block space-x-2 text-center ">
        {CategoriaContext.map((categoria) => (
          <button className=" rounded-3xl border-2 p-2" type="button">
            {categoria}
          </button>
        ))}
      </div>
      <Drawer isOpen={DrawerOpen} setIsOpen={setDrawerOpen} />
    </div>
  );
}
