import React from "react";

import {
  CategoryContainer,
  CategoryContent,
  CategoryH1,
  CardsContainer,
} from "./CategoryElements";

import Card from "../Card";
const Category = ({ title, cardsArray }) => {
  const cards = cardsArray.map((card, i) => {
    return <Card key={i} name={card.name} description={card.description} />;
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
