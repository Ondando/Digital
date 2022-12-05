import Image from 'next/image';
export default function ImageSlider() {
    return (
        <div className="relative h-72 md:h-[600px] md:w-[900px]">
            <Image
                fill
                alt="slider"
                src="https://res.cloudinary.com/djlawikle/image/upload/v1670260943/gta-5_och0eu.jpg"
                placeholder="blur"
                blurDataURL={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cP58PQAH1ALv1c30rwAAAABJRU5ErkJggg=='
                }
            />
        </div>
    );
}
