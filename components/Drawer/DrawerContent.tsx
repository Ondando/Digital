import React, { useContext } from "react";
import { CategoryContext } from "../../context";

export default function DrawerContent() {
  const Data = useContext(CategoryContext);
  return (
    <div className="flex flex-col gap-2 mt-4 w-52 ">
      {Data.map((categoria, Key) => {
        return (
          <button key={Key} type="button">
            <p>{categoria}</p>
          </button>
        );
      })}
    </div>
  );
}
