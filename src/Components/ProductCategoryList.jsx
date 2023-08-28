import React, { useEffect, useState } from 'react';
import { fetchProductCategories } from './api';

const ProductCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProductCategories()
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product Categories</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <ul className="list-group">
            {categories.map(category => (
              <li key={category} className="list-group-item">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryList;
