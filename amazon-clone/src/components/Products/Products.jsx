import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductsCard/ProductCard.jsx";
import styles from "./productsCard/ProductCard.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className={styles.status}>Loading products...</p>;
  }

  if (error) {
    return <p className={styles.status_error}>{error}</p>;
  }

  return (
    <section className={styles.products_container}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} renderAdd={true} />
      ))}
    </section>
  );
}

export default Products;
