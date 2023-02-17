"use client";

import L, { ELanguages } from "./../../languages";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { TextInputDefault } from "@/ui/TextInput";

export default function Searcher() {
  const [Value, setValue] = useState();
  Value;
  return (
    <div className=" m-1 flex flex-row rounded border border-solid border-black p-1">
      <TextInputDefault
        EvtOnChange={setValue}
        PlaceHolder={L(ELanguages.PT)["Search..."]}
      />
      <AiOutlineSearch size={24} />
    </div>
  );
}
