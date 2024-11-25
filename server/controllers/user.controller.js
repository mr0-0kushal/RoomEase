


// controllers/userController.js
import User from '../models/user.model.js'
// controllers/authController.js
import generateOtp from '../utils/generateOtp.js'
import sendOtp from '../utils/sendOtp.js'
// Function to store user details
const createUser = async (req, res) => {
  try {
    const { name, email, phone, gender } = req.body;

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      phone,
      gender,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};


let otpStore = {}; // In-memory storage for OTPs (Can be replaced with a database)

const sendOtpToEmail = async (req, res) => {
  const { email } = req.body;

  // Generate OTP
  const otp = generateOtp();

  // Store OTP in-memory (you could use a database or cache for production)
  otpStore[email] = otp;

  // Send OTP to the user's email
  sendOtp(email, otp);

  res.status(200).json({
    message: 'OTP sent to your email.',
  });
};

// controllers/authController.js (Add to existing file)
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  // Check if the OTP is valid
  if (otpStore[email] && otpStore[email] === otp) {
    // OTP is correct, proceed with login (you can add JWT token generation or session logic here)
    delete otpStore[email]; // Clear OTP after verification

    res.status(200).json({
      message: 'OTP verified successfully. Login granted!',
    });
  } else {
    res.status(400).json({
      message: 'Invalid OTP or OTP expired.',
    });
  }
};


export {createUser , sendOtpToEmail , verifyOtp}