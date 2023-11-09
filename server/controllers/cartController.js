// //logic to interact with database & handle business logic for cart operations

// const Cart = require('../models/Cart');
// const Product = require('../models/Product');

// const cartController = {
//   // Get the cart for the logged-in user
//   getCart: async (req, res) => {
//     try {
//       // Assuming the Cart model has a reference to the user's ID
//       const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
//       res.json(cart);
//     } catch (error) {
//       res.status(500).json({ message: "Error getting the cart", error });
//     }
//   },

//   // Add an item to the cart
//   addItemToCart: async (req, res) => {
//     try {
//       const { productId, quantity } = req.body;
//       const cart = await Cart.findOne({ user: req.user._id });
//       const product = await Product.findById(productId);

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       // Check if item already exists in cart
//       const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//       if (itemIndex > -1) {
//         // Update quantity if item exists
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         // Add new item if it doesn't exist
//         cart.items.push({ product: productId, quantity });
//       }

//       await cart.save();
//       res.status(201).json(cart);
//     } catch (error) {
//       res.status(500).json({ message: "Error adding item to cart", error });
//     }
//   },

//   // Update item quantity in the cart
//   updateCartItem: async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const { quantity } = req.body;
//       const cart = await Cart.findOne({ user: req.user._id });

//       const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//       if (itemIndex > -1 && quantity > 0) {
//         // Update quantity
//         cart.items[itemIndex].quantity = quantity;
//       } else if (itemIndex > -1 && quantity === 0) {
//         // Remove item if quantity is 0
//         cart.items.splice(itemIndex, 1);
//       } else {
//         return res.status(404).json({ message: "Item not found in cart" });
//       }

//       await cart.save();
//       res.json(cart);
//     } catch (error) {
//       res.status(500).json({ message: "Error updating cart item", error });
//     }
//   },

//   // Remove an item from the cart
//   removeItemFromCart: async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const cart = await Cart.findOne({ user: req.user._id });

//       const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//       if (itemIndex > -1) {
//         // Remove item
//         cart.items.splice(itemIndex, 1);
//       } else {
//         return res.status(404).json({ message: "Item not found in cart" });
//       }

//       await cart.save();
//       res.json({ message: "Item removed from cart" });
//     } catch (error) {
//       res.status(500).json({ message: "Error removing item from cart", error });
//     }
//   },
// };

// module.exports = cartController;
