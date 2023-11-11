import React, { useState, userEffect } from 'react';
import Layout from '../components/Layout';
import { getProducts } from '../utils/api';
import Cart from './Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products when the component is mounted
    getProducts()
      .then(data => {
        setProducts(data); // Set the products in the state
        setIsLoading(false); // Loading is complete
      })
      .catch(err => {
        setError(err.message); // Handle any errors
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading text or spinner graphic
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  return (
    <Layout>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div key={product.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '150px' }} />
              <p>${product.price}</p>
              <button onClick={() => addToCartHandler(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {/* Pass setCartItems as updateCart prop to Cart component */}
        <Cart open={open} setOpen={setOpen} cartItems={cartItems} updateCart={setCartItems} />
      </div>
    </Layout>
  );
}

export default Shop;




