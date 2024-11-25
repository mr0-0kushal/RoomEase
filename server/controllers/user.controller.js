
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// controllers/userController.js
import User from '../models/user.model.js'

const signup = async (req, res) => {
  try {
    const { name, email, phone, gender, password } = req.body;
    console.log(1)

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    console.log(1)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email!' });
    }
    console.log(1)

    // Create a new user
    const newUser = new User({ name, email, phone, gender, password });
    await newUser.save();
    console.log(4)

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};






const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET; // Use a strong secret key in production

 const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });

    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};


export {signup , login }