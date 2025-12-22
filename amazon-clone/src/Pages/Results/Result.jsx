import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LayOut from "../../components/layOut/LayOut";
import ProductCard from "../../components/products/productsCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { categoryUrl } from "../../api/endPoint";
import styles from "./Results.module.css"; // Import modular CSS

function Results() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${categoryUrl}/${categoryName}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <LayOut>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.resultsContainer}>
          <h2 className={styles.categoryTitle}>{categoryName}</h2>
          <section className={styles.productsGrid}>
            {products.length > 0 ? (
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  renderAdd={true}
                />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </section>
        </div>
      )}
    </LayOut>
  );
}

export default Results;

