import React from "react";

import {
  CategoryContainer,
  CategoryContent,
  CategoryH1,
  CardsContainer,
} from "./CategoryElements";

import Card from "../Card";
const Category = () => {
  return (
    <CategoryContainer>
      <CategoryContent>
        <CategoryH1>This is a Title data put in</CategoryH1>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </CategoryContent>
    </CategoryContainer>
  );
};

export default Category;
