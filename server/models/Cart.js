// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   items: [
//     {
//       product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true,
//       },
//       quantity: {
//         type: Number,
//         required: true,
//         min: [1, 'Quantity can not be less than 1.'],
//         default: 1,
//       },
//       price: {
//         type: Number,
//         required: true,
//       },
//       // You can add more product-related fields if needed, like size, color, etc.
//     },
//   ],
//   session: {
//     // You can store session information if you need to handle cart for non-logged in users
//     type: String,
//   },
//   modifiedOn: {
//     type: Date,
//     default: Date.now,
//   },
// }, {
//   timestamps: true, // Creates createdAt and updatedAt fields
// });

// // You can add methods here to manipulate the cart
// cartSchema.methods.addToCart = function(product, quantity) {
//   // Logic to add product to the cart
// };

// cartSchema.methods.removeFromCart = function(product) {
//   // Logic to remove product from the cart
// };

// cartSchema.methods.updateQuantity = function(product, quantity) {
//   // Logic to update quantity of a product in the cart
// };

// // Compile model from schema
// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;
