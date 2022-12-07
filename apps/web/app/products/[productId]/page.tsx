'use client';
import IProduct from '../../../interfaces/IProduct';

// Product page
export default function Page({ params }) {
    //const produto: IProduct = use(GetProduct(params.productId));
    const produto: IProduct = {
        id: 'da',
        name: 'dsadas',
        seller: 'dasdasd',
        assets: [''],
        platform: 'sdaad',
    };
    // console.log(produto);
    return (
        <div>
            {produto && (
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
            )}
        </div>
    );
}
