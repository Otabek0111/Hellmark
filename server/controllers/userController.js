//registers user, logs in, fetches user profile, updates user profile

const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; // insert secret key here (store as environment variable)
//need middleware to verify token & inject user object into request before accessing getUserProfile & updateUserInformation

function verifyTokenAndInjectUser(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({message: 'User not found!'})
  }
}
module.exports = { //creates new user with given details after hashing password
  async register({ body }, res) {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(body.password, 12);
      // Create user with hashed password
      const user = await User.create({ ...body, password: hashedPassword });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Unable to register user', error });
    }
  },
  
  async login({ body }, res) { //authenticates user by comparing the given password with the one stored in the database and returns a JWT token upon success
    try {
      const user = await User.findOne({ email: body.email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Check password
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Create token
      const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: 'Unable to log in', error });
    }
  },
  
  async getUserProfile({ user }, res) { //retrieves profile of currently logged-in user
    try {
      // auth middleware inject here?
      const userProfile = await User.findById(user.id);
      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(400).json({ message: 'Unable to fetch user profile', error });
    }
  },
  
  async updateUserProfile({ user, body }, res) { //updates profile of currently logged in user
    try {
      const updatedUser = await User.findByIdAndUpdate(user.id, body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: 'Unable to update user profile', error });
    }
  },

  verifyTokenAndInjectUser,
};
