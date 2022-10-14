import React, { createContext } from "react";

const Context = createContext({ HotStuff: "Hot Stuff" });
export const CategoryContext = createContext(["Software", "Video Jogos","Gift Card"]);

export function ContextProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}

export default Context;
