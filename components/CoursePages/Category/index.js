import React from "react";

import {
  CategoryContainer,
  CategoryContent,
  CategoryH1,
  CardsContainer,
} from "./CategoryElements";

import { Card } from "../Card";
const Category = () => {
  return (
    <CategoryContainer>
      <CategoryContent>
        <CategoryH1>This is a Title data put in</CategoryH1>
        <CardsContainer>
          This will contain map of content. Data.map. Data must have an array
          This will need to wait for page load
        </CardsContainer>
      </CategoryContent>
    </CategoryContainer>
  );
};

export default Category;
