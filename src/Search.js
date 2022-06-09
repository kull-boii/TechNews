import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const data = useGlobalContext();

  return <div>Search {data}</div>;
};

export default Search;
