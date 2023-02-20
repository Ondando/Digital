import { AiOutlineUser } from "react-icons/ai";

export default function Avatar() {
  return (
    <button className="btn-ghost btn-circle btn">
      <div className="indicator">
        <AiOutlineUser size={24} />
      </div>
    </button>
  );
}
