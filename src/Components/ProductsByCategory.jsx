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
    <>
        <div className="p-3 bgs">
      <h1 className="text-center mt-2 mb-0">Product List</h1>

      <div className="row row-cols-1 row-cols-md-3">
        {products.map((product) => (
          <div className="col p-3" key={product.id}>
            <div className="card h-100 g-6 p-6 product-card">
              <img
                style={{ height: "250px", width: "100%" }}
                src={product.thumbnail}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <ul className="list-unstyled">
                <li>
                  <strong>Description:</strong> {product.description}
                </li>
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
              <div className="card-footer text-center">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
  );
};

export default ProductsByCategory;
