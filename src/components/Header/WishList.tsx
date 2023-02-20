import { AiOutlineHeart } from "react-icons/ai";

export default function WishList() {
  return (
    <button className="btn-ghost btn-circle btn">
      <div className="indicator">
        <AiOutlineHeart size={24} />
      </div>
    </button>
  );
}
