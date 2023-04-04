import { UserAccount } from "@/interfaces/IUser";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

export default function Avatar(props: { user: UserAccount | null }) {
  return (
    <button className="btn-ghost btn-circle btn">
      {props.user ? (
        <>
          {/* User Image */}
          <Image
            width={24}
            height={24}
            alt={props.user.firstName}
            src={`${props.user.avatar}`}
          />
        </>
      ) : (
        <>
          <div>
            <AiOutlineUser size={24} />
          </div>
        </>
      )}
    </button>
  );
}
