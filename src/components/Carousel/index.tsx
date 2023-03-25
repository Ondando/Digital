import Image from "next/image";

interface ICarousel {
  CarouselContents: ICarouselContent[];
}

export interface ICarouselContent {
  ContentImage: string;
  ContentLink: string;
}

export default function Carousel(props: ICarousel) {
  return (
    <div className="carousel mx-auto h-56 rounded-lg border-2 shadow-md md:h-[480px] md:max-w-[768px]">
      {props.CarouselContents.map((e, k) => {
        return (
          <div
            key={k}
            id={k.toString()}
            className="carousel-item relative w-full"
          >
            <Image
              fill
              src={e.ContentImage}
              alt={e.ContentLink}
              className="w-full"
            />
            <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a
                href={`${k == 0 ? "#3" : `#${k - 1}`}`}
                className="btn-ghost btn-circle btn"
              >
                ❮
              </a>
              <a
                href={`${k == 3 ? "#0" : `#${k + 1}`}`}
                className="btn-ghost btn-circle btn"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
