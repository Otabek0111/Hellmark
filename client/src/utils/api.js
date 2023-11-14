const BASE_URL = 'http://localhost:3001/api';


export const getAllProducts = async () => {
  return  await fetch(`${BASE_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
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

// export const updateProductByTitle = (title, updateData) => {
//   return fetch(`${BASE_URL}/products/${encodeURIComponent(title)}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updateData),
//   });
// };

// export const deleteProductByTitle = (title) => {
//   return fetch(`${BASE_URL}/products/${encodeURIComponent(title)}`, {
//     method: 'DELETE',
//     headers:{
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const signup = (userData) => {
  return fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const login = (credentials) => {
  return fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};

export const logout = () => {
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
