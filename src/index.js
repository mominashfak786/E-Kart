import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import ProductCategoryList from "./Components/ProductCategoryList";
import ProductDetail from "./Components/ProductDetail";
import ProductsByCategory from "./Components/ProductsByCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Move the Navbar outside the Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/products/category/:category_name"
          element={<ProductsByCategory />}
        />
        <Route path="/products/categories" element={<ProductCategoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
