// api.js

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = () => {
  return fetch(`${BASE_URL}/products`).then((response) => response.json());
};

export const fetchProductCategories = () => {
  return fetch(`${BASE_URL}/products/categories`).then((response) => response.json());
};

export const fetchProductsByCategory = (categoryName) => {
  return fetch(`${BASE_URL}/products/category/${categoryName}`).then((response) => response.json());
};

export const fetchProductById = (id) => {
  return fetch(`${BASE_URL}/products/${id}`).then((response) => response.json());
};
