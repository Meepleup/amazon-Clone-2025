import React from "react";
import LayOut from "../../components/layOut/LayOut";
import Carousel from "../../components/carousel/ImageCarousel";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";

const Landing = () => {
  return (
    <LayOut>
      <main>
        <Carousel />
        <Category />
        <Products />
      </main>
    </LayOut>
  );
};

export default Landing;

