const mongoose = require('mongoose');
const User = require ('./models/User');

mongoose.connect('mongodb://localhost/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

//list of user data

const userData = [
    {
        userId: '1',
        email: 'user1@example.com',
        password: 'password1',
    },
    {
        userId: '2',
        email: 'user2@example.com',
        password: 'password2',
    },
    {
        userId: '3',
        email: 'user3@example.com',
        password: 'password3',
    },
    {
        userId: '4',
        email: 'user4@example.com',
        password: 'password4',
    },
    {
        userId: '5',
        email: 'user5@example.com',
        password: 'password5',
    },
];

async function seedUsers() {
    try {
        await User.deleteMany();
        await User.insertMany(userData);
        console.log ('User data inserted successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedUsers();