const BASE_URL = 'http://localhost:3001/api'; // Replace with your actual server URL

// Helper to generate headers objec

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createProduct = (productData) => {
  return fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
};

export const getProductByTitle = (title) => {
  return fetch(`${BASE_URL}/products/${encodeURIComponent(title)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateProductByTitle = (title, updateData) => {
  return fetch(`${BASE_URL}/products/${encodeURIComponent(title)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });
};

export const deleteProductByTitle = (title) => {
  return fetch(`${BASE_URL}/products/${encodeURIComponent(title)}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
    },
  });
};

export const registerUser = (userData) => {
  return fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (credentials) => {
  return fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};

export const logoutUser = () => {
  return fetch(`${BASE_URL}/users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getUserProfile = (email) => {
  return fetch(`${BASE_URL}/users/${encodeURIComponent(email)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
