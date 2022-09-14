import Image from "next/image"
import logonb from '../../assets/logonb.png';


interface IProduto{
    Valor: string
}
export default function Produto(props:IProduto) {
  return (
    <div id='Produto' className='border-2 rounded-md'>
                <Image src={logonb} alt='' className='border-1 rounded-md' />
                <p></p>
                <div className='flex flex-row justify-between'>
              <p>{ props.Valor}</p>
                <div className='flex flex-row'>
                  <p>LoveIcon</p>
                  <p>ShopCardIcon</p>

                </div>
                </div>
              
    </div>
  )
}