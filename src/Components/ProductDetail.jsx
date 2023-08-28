import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from './api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
          <div className="d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="d-flex justify-content-between">
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Discount: {product.discountPercentage}%</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Stock: {product.stock} units</p>
              </div>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Category: {product.category}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
