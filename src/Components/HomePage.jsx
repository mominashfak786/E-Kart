import React from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";
const HomePage = () => {
  return (
    <div className="size">
      <div>
        <div className="jumbotron text-center wave-bg">
          <h1 className="display-4">Welcome to E-Kart App</h1>
          <p className="lead">
            Discover amazing products and explore exciting categories.
          </p>
          <p>
            <Link
              to="/products"
              className="btn btn-primary btn-lg"
              role="button"
            >
              Explore Products
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
