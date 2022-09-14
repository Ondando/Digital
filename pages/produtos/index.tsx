
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
const produtos: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ondando Digital</title>
            </Head>
            <Header/>
            <main>
                <p>Image produto</p>

                <p>Nome Do produto</p>
                <div className='flex-row flex justify-between'>
                    <p>Some info logos</p>
                    <p>Love Button</p>
                </div>
                <p>ContriRestr</p>
                <div>Price</div>
                <div>
                <button >Buy Now</button>
                </div>
                <button >Add Cart</button>
                <p>sold by jojioj</p>
                <p>90% of 12.207 </p>

                <p>Activation</p>
                <p>GO to product description</p>
                <p>Other Sellers</p>
                <div>
                    <div>
                    <p>name</p>
                    <p>rating </p>

                    </div>
                    <p>Price</p>
                </div>
                <div>
                    <p>Ratings</p>
                    <p>Ratings</p>
                    <p>Ratings</p>
                    <p>Ratings</p>
                </div>
                <div>
                    <p>You May also like</p>
                </div>
            </main>

            <footer>
                
            </footer>
        </>
    )
}

export default produtos