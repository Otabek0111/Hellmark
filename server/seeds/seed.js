const mongoose = require('mongoose');
const { Product, User } = require('../models');
require('dotenv').config();

//connect to mongo db
const productData = require('./productData.json');
const userData = require('./userData.json');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    // await Product.deleteMany();

    await User.insertMany(userData);
    await Product.insertMany(productData);

  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  } 
});

// async function seedProducts() {
//   try {
//     // await Product.deleteMany();
//     await Product.insertMany(productData);

//   } catch (error) {
//     console.log(error);
//   }
// }

// async function seedUsers() {
//   try {
//     // await Product.deleteMany();
//     await User.insertMany(userData);

//   } catch (error) {
//     console.log(error);
//   } finally {
//     db.close();
//   }
// }

// seedProducts();
// seedUsers();
