const mongoose = require('mongoose');
const {Product, User} = require ('../models');

//connect to mongo db

mongoose.connect ('mongodb://localhost/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//list of products
//figure out why data isn't seeding
const productsData = [
  {
    id: '1',
    title: 'STD card',
    description: 'Let a partner know that they might have chlamydia',
    price: 5,
    image: 'image link here',
  },
  {
    id: '2',
    title: 'Crash Car',
    description: 'Let someone know you crashed their car',
    price: 5,
    image: 'image link here',
  },
  {
    id: '3',
    title: 'Breakup',
    description: 'Breakup with someone the unclassy way',
    price: 5,
    image: 'image link here',
  },
  {
    id: '4',
    title: 'Cheating',
    description: 'For when someone gets caught cheating',
    price: 5,
    image: 'image link here',
  },
  {
    id: '5',
    title: 'Im Gay',
    description: 'Creative way to get out of the closet',
    price: 5,
    image: 'image link here',
  },
  {
    id: '6',
    title: 'Thanksgiving Invite',
    description: 'Uninvite someone to Thanksgiving',
    price: 5,
    image: 'image link here',
  },
  {
    id: '7',
    title: 'Second Family',
    description: 'When you find out you have more siblings than you think',
    price: 5,
    image: 'image link here',
  },
  {
    id: '8',
    title: 'Size Me Up',
    description: 'Size does matter',
    price: 5,
    image: 'image link here',
  },
  {
    id: '9',
    title: 'Owe Money',
    description: 'Pay your debt!',
    price: 5,
    image: 'image link here',
  },
  {
    id: '10',
    title: 'Backstabbers',
    description: 'Nice in front of you, mean Karen behind your back',
    price: 5,
    image: 'image link here',
  },
  {
    id: '11',
    title: 'Christmas Card',
    description: 'High at dinner',
    price: 5,
    image: 'image link here',
  },
  {
    id: '12',
    title: 'Marriage quote',
    description: 'How long will a marriage last?',
    price: 5,
    image: 'image link here',
  },

];

async function seedProducts () {
  try {
    await Product.deleteMany();
    await Product.insertMany(productsData);

  } catch (error) {

  } finally {
    db.close();
  }
}

seedProducts();
