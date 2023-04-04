import { UserAccount } from "@/interfaces/IUser";
import { AiOutlineHeart } from "react-icons/ai";

export default function WishList({ user }: { user: UserAccount | null }) {
  return (
    <button className="btn-ghost btn-circle btn">
      {user?.buyerAccount?.wishList ? (
        <>
          {/* indicator mush show the amount of wishlisted products */}
          <div className="indicator">
            <span className="badge-secondary badge badge-xs indicator-item">
              {user.buyerAccount?.wishList?.length}
            </span>
            <AiOutlineHeart size={24} />
          </div>
        </>
      ) : (
        <>
          <div>
            <AiOutlineHeart size={24} />
          </div>
        </>
      )}
    </button>
  );
}
