// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getMatchup, createVote } from '../utils/api';

// import products from '../productsStore';
// console.log(products);



// function Shop(){
//   return (
//     <h1> Welcome to the Card Store! </h1>
//   )
// }

// export default Shop;

// import React, { useState, useEffect } from 'react';

// function Shop() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/api/products')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Card Store!</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {products.map((product) => (
//           <div key={product.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//             <button onClick={() => addToCartHandler(product.id)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Shop;



import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import products from '../productsStore';

function Shop() {
  const addToCartHandler = (productId) => {
    // You can implement the logic to add the product to the cart here
    console.log(`Product added to cart with ID: ${productId}`);
  };

  return (
    <div>
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
    </div>
  );
}

export default Shop;

