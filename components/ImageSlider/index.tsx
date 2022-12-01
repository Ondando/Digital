import Image from "next/image";
import slideimage from "@assets/slideimage.png";

export default function ImageSlider() {
  return (
    <div className="relative h-72 md:w-[900px] md:h-[600px]">
      <Image
        fill
        alt="slider"
        src={slideimage}
        placeholder="blur"
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cP58PQAH1ALv1c30rwAAAABJRU5ErkJggg=="
        }
      />
    </div>
  );
}
