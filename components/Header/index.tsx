import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import avataricon from '../../assets/avataricon.png';
import carticon from '../../assets/carticon.png';
import Drawer from '../Drawer';

function SerchInput() {
  return (
    <>
    </>
  );
}

export default function Header() {
  const [DrawerOpen, setDrawerOpen] = useState(true);
  return (
    <div className="md:container md:mx-auto ">
      <div className="bg-pink-100 p-2 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <button className="md:invisible" type="button" onClick={() => setDrawerOpen(true)}>
              <FaBars />
            </button>
            <Drawer isOpen={DrawerOpen} setIsOpen={setDrawerOpen} />
            <p className="text-2xl md:text-4xl">Digital</p>
          </div>
          <div className="text-center invisible md:visible md:w-full">
            <SerchInput />
          </div>
          <div className="flex flex-row gap-2 ">
            <Image src={avataricon} alt="Account" height={48} width={48} layout="fixed" />
            <Image src={carticon} alt="Carrinho" height={48} width={48} layout="fixed" />
          </div>
        </div>
        <div className=" md:invisible mx-auto w-11/12 border-2 rounded-full bg-white justify-center flex flex-row">
          <input placeholder="Search" className="text-2xl  bg-transparent" />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 invisible md:visible">
        <p>Categoria </p>
        <p>CategoriaB </p>
        <p>CategoriaC </p>
        <p>CategoriaD </p>
      </div>

    </div>
  );
}
