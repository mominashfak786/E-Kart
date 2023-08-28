import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

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

export default ProductList;
