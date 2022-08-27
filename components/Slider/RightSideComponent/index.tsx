import Image from "next/image"
import logonb from '../../../assets/logonb.png'

export default function RightSideComponent() {
    return (
        <>
        <div className='flex flex-row justify-between '>
                <div className=' rounded p-2'>
                  <Image src={logonb} layout={'fixed'} height={100} width={200} alt='TheImage' />
                </div>
                <div className="p-2">
                  <p className="text-sm">Um Longo Texto</p>
                  <p className="text-sm">Texto</p>
                </div>
            </div>
        </>
    )
}