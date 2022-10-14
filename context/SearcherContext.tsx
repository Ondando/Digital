import React, { createContext, useState } from "react";

const SearcherContext = createContext({});
export default SearcherContext;

export function SearcherProvider({ children }) {
  const [Search, setSearch] = useState("");
  return (
    <SearcherContext.Provider value={[Search, setSearch]}>
      {children}
    </SearcherContext.Provider>
  );
}
