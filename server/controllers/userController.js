//registers user, logs in, fetches user profile, updates user profile

const { User } = require('../models');
const bcrypt = require('bcryptjs');


module.exports = { //creates new user with given details after hashing password
  async register(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(400).json({ message: 'Error registering user', error: error.message });
    }
  },

  // User login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      req.session.user_id = user._id;
      req.session.logged_in = true;
      res.json({ message: 'You are now logged in!', user });
    } catch (error) {
      res.status(400).json({ message: 'Error logging in', error: error.message });
    }
  },

  // User logout
  async logout(req, res) {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).send('No active session');
    }
  },

  async getUserProfile({ params }, res) { //retrieves profile of currently logged-in user
    try {
      // auth middleware inject here?
      const userProfile = await User.find({ email: params.email });
      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(400).json({ message: 'Unable to fetch user profile', error });
    }
  }
};
