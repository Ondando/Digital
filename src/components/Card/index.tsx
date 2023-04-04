import { Text } from "@/ui/Text";
import Link from "next/link";

export interface ICard {
  name: string;
  image: string;
}

//TODO: MAKE CARD OnHover BETTER

export const Card = ({ name, image }: ICard) => {
  return (
    <Link
      href={`/${name.replaceAll(" ", "")}`}
      className=" card card-compact mx-auto w-full bg-base-100 shadow-md hover:scale-110 md:max-h-56 md:w-11/12"
    >
      <figure>
        <img src={image} alt={name} className="h-48" />
      </figure>
      <div className=" card-body">
        <Text text={name} />
      </div>
    </Link>
  );
};
