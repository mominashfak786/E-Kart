import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { fetchProductCategories } from "./api";
import "../styles/common.css";

const ProductCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProductCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="bgs">
    <div className="container  ">
      <h1 className="text-center  mb-3  ">Product Categories</h1>
      <div className="category-container">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products/category/${category}`}
            className="category-box"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductCategoryList;
