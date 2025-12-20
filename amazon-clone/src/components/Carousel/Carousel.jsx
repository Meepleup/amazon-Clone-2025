import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data.js";
import styles from "./Carousel.module.css";

const HeroCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img
              src={imageItemLink}
              alt={`Slide ${index + 1}`}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>

      {/* Amazon-style fade */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
};

export default HeroCarousel;
