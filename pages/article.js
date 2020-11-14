import React from "react";
import { useRouter } from "next/router";
const Article = ({ itemProp }) => {
  const router = useRouter();
  console.log(router.pathname);
  console.log("here", itemProp);
  return (
    <div>
      <h1>{router.pathname}</h1>
    </div>
  );
};

export default Article;
