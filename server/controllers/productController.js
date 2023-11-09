//handles creating, reading, updating, & deleting products
//CRUD methodology

const { Product } = require('../models');

module.exports = {
  // Create a new product
  async createProduct({ body }, res) {
    try {
      const product = await Product.create(body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Unable to create product', error });
    }
  },

  // Get a list of all products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: 'Unable to retrieve products', error });
    }
  },

  // Get a single product by ID
  async getProductById({ params }, res) {
    try {
      console.log(params.id);
      const product = await Product.find({id: params.id});
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Unable to find product', error });
    }
  },

  // Update a product by ID
  async updateProduct({ params, body }, res) {
    try {
      const product = await Product.findByIdAndUpdate({id: params.id}, body, { new: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Unable to update product', error });
    }
  },

  // Delete a product by ID
  async deleteProduct({ params }, res) {
    try {
      const product = await Product.findByIdAndDelete({id: params.id});
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product successfully deleted' });
    } catch (error) {
      res.status(400).json({ message: 'Unable to delete product', error });
    }
  },
};
