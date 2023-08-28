import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from './api';

const ProductsByCategory = () => {
  const { category_name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(category_name)
      .then(data => {
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid or missing products data:', data);
        }
      })
      .catch(error => console.error('Error fetching products by category:', error));
  }, [category_name]);

  return (
    <div>
    <h2 className="text-center mb-4">Product List</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map(product => (
        <div className="col" key={product.id}>
          <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Discount: {product.discountPercentage}%</p>
              <p className="card-text">Rating: {product.rating}</p>
              <p className="card-text">Stock: {product.stock} units</p>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Category: {product.category}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductsByCategory;
