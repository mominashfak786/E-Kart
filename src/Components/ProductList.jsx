import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import "../styles/common.css";
import { Link } from "react-router-dom"; // Import Link

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="p-3 bgs">
        <h1 className="text-center mt-2 mb-0">Product List</h1>

        <div className="row row-cols-1 row-cols-md-3">
          {products.map((product) => (
            <div className="col p-3" key={product.id} >
              <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }} className="card-link">

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
                </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
