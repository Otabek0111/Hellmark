const mongoose = require('mongoose');
const { Product, User } = require ('../models');

//connect to mongo db
const productData = require('./productData.json');
const userData = require('./userData.json');

mongoose.connect ('mongodb://localhost/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

async function seedProducts () {
  try {
    // await Product.deleteMany();
    await Product.insertMany(productData);

  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}

async function seedUsers() {
  try {
    // await Product.deleteMany();
    await User.insertMany(userData);

  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}

seedProducts();
seedUsers();
