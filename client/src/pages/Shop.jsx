// import React, { Fragment, useState } from 'react';
// import Layout from '../components/Layout';
// import { Link } from 'react-router-dom';
// import products from '../productsStore';
// import Cart from './Cart';

// function Shop() {
//   const [open, setOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const addToCartHandler = (productId) => {
//     // Find the product by ID
//     const productToAdd = products.find((product) => product.id === productId);

//     // Add the product to the cartItems array
//     setCartItems((prevItems) => [...prevItems, productToAdd]);

//     setOpen(true);
//   };

//   return (
// <Layout>
//     <div>
      
//       {/* <h1>Welcome to the Card Store!</h1> */}
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {products.map((product) => (
//           <div key={product.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
//             <h3>{product.title}</h3>
//             <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '150px' }} />
//             <p>${product.price}</p>
//             <button onClick={() => addToCartHandler(product.id)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <Cart open={open} setOpen={setOpen} cartItems={cartItems} />
//     </div>
//     </Layout>
//   );
// }

// export default Shop;
import React, { Fragment, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import products from '../productsStore';
import Cart from './Cart';

function Shop() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (productId) => {
    // Find the product by ID
    const productToAdd = products.find((product) => product.id === productId);

    // Add the product to the cartItems array
    setCartItems((prevItems) => [...prevItems, productToAdd]);

    setOpen(true);
  };

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




