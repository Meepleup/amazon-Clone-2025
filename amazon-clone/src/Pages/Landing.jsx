import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import CategoryFullInfos from "../../Components/CategoryFullInfos/CategoryFullInfos";
import Products from "../../Components/Products/Products";

const Landing = () => {
  return (
    <LayOut>
      <HeroCarousel />
      <CategoryFullInfos />
      <Products />
    </LayOut>
  );
};

export default Landing;
