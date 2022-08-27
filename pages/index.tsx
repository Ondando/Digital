import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Slider from '../components/Slider'
import RightSideComponent from '../components/Slider/RightSideComponent'
import styles from '../styles/Home.module.css'


interface ISectionText{
  Texto:string
}
function SectionText(props:ISectionText) {
  return (<p>{props.Texto}</p>)
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ondando Digital</title>
        <meta name="description" content="Ondando - Digital Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main  className='m-1 md:container md:mx-auto'>

          <SectionText Texto='HOT STUFF' />
        <div id='SliderSection' className='md:flex md:flex-row'> 
          <div id='LeftWithImage'>
           <Slider />
          </div>

          <div id='RightWithComponents'>
            <div className='md:pt-14'>
              <RightSideComponent />
              <RightSideComponent />
              <RightSideComponent />
            </div>
          </div>

        </div>
        
      </main>

      <footer >
        
      </footer>
    </>
  )
}

export default Home
