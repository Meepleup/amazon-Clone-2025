import { useEffect, useState } from "react";
import "./CategoryFullInfos.css";

const CategoryFullInfos = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryFullInfos = async () => {
      try {
        const catRes = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const catNames = await catRes.json();

        const fullInfos = await Promise.all(
          catNames.map(async (category) => {
            const prodRes = await fetch(
              `https://fakestoreapi.com/products/category/${category}`
            );
            const products = await prodRes.json();

            return {
              name: category,
              image: products[0]?.image,
              totalProducts: products.length,
            };
          })
        );

        setCategories(fullInfos);
      } catch {
        setError("Failed to load categories"); // catch without parameter
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryFullInfos();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="categories">
      {categories.map((cat) => (
        <div key={cat.name} className="category-card">
          <img src={cat.image} alt={cat.name} />
          <h3>{cat.name}</h3>
          <p>{cat.totalProducts} products</p>
        </div>
      ))}
    </section>
  );
};

export default CategoryFullInfos;
