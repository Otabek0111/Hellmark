import React, { useState, useEffect } from 'react'; // Fixed useEffect
import Layout from '../components/Layout';
import { getAllProducts } from '../utils/api';
import Cart from './Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // You need to define the state for cartItems and open if you're using them for Cart component
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch products when the component is mounted
    getAllProducts()
      .then(data => {
        setProducts(data); // Set the products in the state
        setIsLoading(false); // Loading is complete
      })
      .catch(err => {
        setError(err.message); // Handle any errors
        setIsLoading(false);
      });
  }, []);

  // Define addToCartHandler function if it's being used
  const addToCartHandler = (productId) => {
    // Logic to add product to cart
    // For example, you might want to find the product by ID and then set it in cartItems state
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      setCartItems(prevItems => [...prevItems, productToAdd]);
    }
  };

  if (isLoading) {
    return <Layout><div>Loading...</div></Layout>; // Wrap loading in Layout for consistent styling
  }

  if (error) {
    return <Layout><div>Error: {error}</div></Layout>; // Wrap error in Layout as well
  }

  return (
    <Layout>
      <div className="pt-10">
        <div className="flex flex-wrap m-20">
          {products.map((product) => (
            <div key={product.id} className="mt-5 shadow-xl rounded-xl border-solid border-2 border-sky-200 hover:border-double hover:border-sky-500"  style={{ margin: '10px', padding: '10px', display: 'flex', flexDirection: 'column' }}>
              <h3 className="text-center m-3 text-lg font-medium">{product.title}</h3>
              <img src={product.image} alt={product.title} className="rounded-lg" style={{ maxWidth: '100%', maxHeight: '150px' }} />
              <p>${product.price}</p>
              <button className='bg-blue-100 m-5 rounded-lg hover:bg-blue-400' onClick={() => addToCartHandler(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Cart open={open} setOpen={setOpen} cartItems={cartItems} updateCart={setCartItems} />
      </div>
    </Layout>
  );
}

export default Shop;
