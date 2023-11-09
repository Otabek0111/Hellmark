// //handles creation & management of orders
// //creates new order with list of products, handles payments(?), updates order status, retrieves order details

// const { Order } = require('../models');

// module.exports = {
//   // Create a new order
//   //user making the order should be authenticated & their ID is attached to order?
//   async createOrder({ user, body }, res) {
//     try {
//       const newOrder = new Order({
//         user: user.id,
//         orderItems: body.orderItems,
//         shippingAddress: body.shippingAddress,
//         paymentMethod: body.paymentMethod,
//         itemsPrice: body.itemsPrice,
//         taxPrice: body.taxPrice,
//         shippingPrice: body.shippingPrice,
//         totalPrice: body.totalPrice,
//       });

//       const savedOrder = await newOrder.save();
//       res.status(201).json(savedOrder);
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to create order', error });
//     }
//   },

//   // Get order by ID
//   //ensures that order belongs to user making request
//   async getOrderById({ user, params }, res) {
//     try {
//       const order = await Order.findById(params.id);
//       if (order && order.user.equals(user.id)) {
//         res.status(200).json(order);
//       } else {
//         res.status(404).json({ message: 'Order not found or user mismatch' });
//       }
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to find order', error });
//     }
//   },

//   // Update order to paid
//   //once payment process is completed
//   async updateOrderToPaid({ params, body }, res) {
//     try {
//       const order = await Order.findById(params.id);
//       if (order) {
//         order.isPaid = true;
//         order.paidAt = Date.now();
//         order.paymentResult = {
//           id: body.id,
//           status: body.status,
//           update_time: body.update_time,
//           email_address: body.payer.email_address,
//         };

//         const updatedOrder = await order.save();
//         res.status(200).json(updatedOrder);
//       } else {
//         res.status(404).json({ message: 'Order not found' });
//       }
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to update order', error });
//     }
//   },

//   // Gets all orders from specific user 
//   async getMyOrders({ user }, res) {
//     try {
//       const orders = await Order.find({ user: user.id });
//       res.status(200).json(orders);
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to get orders', error });
//     }
//   },

//   // Get all orders in system - Admin level function?
//   async getAllOrders(req, res) {
//     try {
//       const orders = await Order.find().populate('user', 'id name');
//       res.status(200).json(orders);
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to get orders', error });
//     }
//   },

//   // changes order status to be delivered - Admin level function
//   async updateOrderToDelivered({ params }, res) {
//     try {
//       const order = await Order.findById(params.id);
//       if (order) {
//         order.isDelivered = true;
//         order.deliveredAt = Date.now();

//         const updatedOrder = await order.save();
//         res.status(200).json(updatedOrder);
//       } else {
//         res.status(404).json({ message: 'Order not found' });
//       }
//     } catch (error) {
//       res.status(400).json({ message: 'Unable to update order', error });
//     }
//   },
// };
