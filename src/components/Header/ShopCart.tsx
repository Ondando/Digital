import { AiFillShopping } from "react-icons/ai";

export default function ShopCart() {
  return (
    <button className="btn-ghost btn-circle btn">
      <div className="indicator">
        <AiFillShopping size={24} />
        <span className="badge-primary badge badge-xs indicator-item"></span>
      </div>
    </button>
  );
}
