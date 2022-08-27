import React from "react"

export default function Header() {
    return (
        <div className="md:container md:mx-auto">
            <div className="bg-pink-100 p-2 ">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2">
                        <p className="md:invisible">=</p>
                        <p className="text-2xl md:text-4xl">Digital</p>
                    </div>
                     <div className="text-center invisible md:visible md:w-full">
                    <input placeholder="Search" className="border-2 rounded w-3/4 text-4xl"></input> {/*  */}
                </div>
                    <div className="flex flex-row gap-2 ">
                        <p>Avatar</p>
                        <p>ShopCard</p>
                    </div>
                </div>
                <div className="text-center md:invisible">
                    <input placeholder="Search" className="border-2 rounded w-2/3  text-2xl "></input> {/*  */}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-2 invisible md:visible">
                <p>Categoria </p>
                <p>CategoriaB </p>
                <p>CategoriaC </p>
                <p>CategoriaD </p>
            </div>
        
        </div>
    )
}