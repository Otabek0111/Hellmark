// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import products from '../productsStore';
// import Navbar from '../components/Navbar';

// function Shop() {
//   const addToCartHandler = (productId) => {
//     // You can implement the logic to add the product to the cart here
//     console.log(`Product added to cart with ID: ${productId}`);
//   };

//   return (
    
//     <div>
//         <Navbar />



//       <h1>Welcome to the Card Store!</h1>
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
//     </div>
//   );
// }

// export default Shop;

import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation
import products from '../productsStore';
import Cart from './Cart';
function Shop() {
  const [open, setOpen] = useState(false)
  const addToCartHandler = (productId) => {
    // You can implement the logic to add the product to the cart here
    console.log(`Product added to cart with ID: ${productId}`);
    setOpen(true);
  };
  return (
    <div>

{/* <Navbar /> */}
      <h1>Welcome to the Card Store!</h1>
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
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
}
export default Shop;

