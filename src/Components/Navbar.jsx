import React from "react";
import { Link } from "react-router-dom";
import '../styles/common.css'
const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" style={{ fontSize: '30px' }} to="/">
      E-Kart
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/" style={{ fontSize: '20px' }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products" style={{ fontSize: '20px' }}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products/categories" style={{ fontSize: '20px' }}>
            Categories
          </Link>
        </li>
      </ul>
    </div>
    <form className="d-none d-sm-flex">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>
  </div>
</nav>
  );
};

export default NavigationBar;
