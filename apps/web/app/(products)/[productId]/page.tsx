'use client';
import { use, useState } from 'react';
import IProduct from '../../../interfaces/IProduct';
import GetProduct from '../../../functions/GetProduct';

export default function ProductPage({ params }) {
    const produto: IProduct = use(GetProduct(params.productId));
    console.log(produto);
    return (
        <div>
            {produto && (
                <>
                    <div key={produto.id}>
                        <div>
                            <p>Image and video caroussel/slider </p>
                            <p>{produto.name}</p>
                            <p>{produto.platform}</p>
                        </div>
                        <div>
                            <p>activation rule</p>
                            <p>Game Info</p>
                            <p>Seller info</p>
                            <p>Price</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
