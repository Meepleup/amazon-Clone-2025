import React from "react";
import Header from "./components/Header/Header.jsx";
import HeroCarousel from "./components/Carousel/Carousel.jsx";
import CategoryFullInfos from "./components/Category/CategoryFullInfos.jsx";
import Products from "./components/Products/Products.jsx";


const App = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <CategoryFullInfos />
      <Products />
    </>
  );
};

export default App;
