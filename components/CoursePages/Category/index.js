import React from "react";

import {
  CategoryContainer,
  CategoryContent,
  CategoryH1,
  CardsContainer,
} from "./CategoryElements";

import Card from "../Card";
const Category = ({ title, cardsArray }) => {
  const cards = cardsArray.map((number, i) => {
    return <Card key={i} />;
  });
  return (
    <CategoryContainer>
      <CategoryContent>
        <CategoryH1>{title}</CategoryH1>
        <CardsContainer>{cards}</CardsContainer>
      </CategoryContent>
    </CategoryContainer>
  );
};

export default Category;
