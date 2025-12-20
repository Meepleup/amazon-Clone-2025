import React from "react";
import styles from "./ProductCard.module.css";
import { MdStar, MdStarBorder } from "react-icons/md";

const ProductCard = ({ product, renderAdd = false }) => {
  if (!product) return null;

  const { title, price, image, rating } = product;

  // Helper to render rating stars
  const renderStars = () => {
    const stars = [];
    const rate = Math.round(rating?.rate || 0);
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rate ? <MdStar key={i} /> : <MdStarBorder key={i} />);
    }
    return stars;
  };

  return (
    <div className={styles.product_card}>
      <img className={styles.product_image} src={image} alt={title} />
      <h3 className={styles.product_title}>{title}</h3>

      <div className={styles.product_info}>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <span className={styles.rating}>{renderStars()}</span>
      </div>

      {renderAdd && (
        <button className={styles.add_button} aria-label={`Add ${title} to cart`}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
