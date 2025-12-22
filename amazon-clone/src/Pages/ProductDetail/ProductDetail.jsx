import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LayOut from "../../components/layOut/LayOut";
import ProductCard from "../../components/products/productsCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import { productsUrl } from "../../api/endPoint";

function ProductDetail() {
  const { productId } = useParams(); // Get the product ID from the URL
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch product details when component mounts or productId changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${productsUrl}/${productId}`);
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <LayOut>
      {loading ? (
        <Loader /> // Show loading spinner while fetching data
      ) : productDetail ? (
        <ProductCard
          product={productDetail}
          key={productDetail.id}
          flex={true}             // Layout option for horizontal flex display
          readDescription={true}  // Show full description
          renderAdd={true}        // Show "Add to Cart" button
        />
      ) : (
        <p>Product not found.</p> // Fallback if productDetail is null
      )}
    </LayOut>
  );
}

export default ProductDetail;
