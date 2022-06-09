import React, { useEffect } from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, nbPages, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  return (
    <>
      <h2>My tech news Post</h2>
      {hits.map((currPost) => {
        return <h2>{currPost.title}</h2>;
      })}
    </>
  );
};

export default Stories;
