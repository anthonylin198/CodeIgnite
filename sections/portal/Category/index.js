import React from "react";

import {
  CategoryContainer,
  CategoryContent,
  CategoryH1,
  CardsContainer,
} from "./CategoryElements";

import ModuleCard from "../../../components/ModuleCard";
const Category = ({ title, cardsArray }) => {
  const cards = cardsArray.map((card, i) => {
    return (
      <ModuleCard
        linkTo="article"
        preTitle={card.name}
        title={card.title}
        key={i}
        name={card.name}
        description={card.description}
      />
    );
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
