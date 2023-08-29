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
      {product ? (
          <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <ul className="list-unstyled">
                  <li>
                    <strong>Price:</strong> ${product.price}
                  </li>
                  <li>
                    <strong>Discount:</strong> {product.discountPercentage}%
                  </li>
                  <li>
                    <strong>Rating:</strong> {product.rating}
                  </li>
                  <li>
                    <strong>Stock:</strong> {product.stock} units
                  </li>
                  <li>
                    <strong>Brand:</strong> {product.brand}
                  </li>
                  <li>
                    <strong>Category:</strong> {product.category}
                  </li>
                </ul>
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
