"use client";
import React, { useState } from "react";

export default function Searchear() {
  const [SearchValue, setSearchValue] = useState("");
  function HandleChange(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchValue(e.currentTarget.value);
  }
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search..."
        className="input-bordered input"
        onChange={HandleChange}
      />
    </div>
  );
}
