import { UserAccount } from "@/interfaces/IUser";
import { AiFillShopping } from "react-icons/ai";

export default function ShopCart({ user }: { user: UserAccount | null }) {
  return (
    <button className="btn-ghost btn-circle btn">
      {user?.buyerAccount?.shopCart ? (
        <>
          <div className="indicator">
            <span className="badge-primary badge badge-xs indicator-item">
              {user.buyerAccount?.shopCart.length}
            </span>
            <AiFillShopping size={24} />
          </div>
        </>
      ) : (
        <>
          <div>
            <AiFillShopping size={24} />
          </div>
        </>
      )}
    </button>
  );
}
