import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin from '../models/admin.model.js'

// Signup Endpoint
const adminSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if admin already exists
    console.log(name , email , password)
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Admin registered successfully", admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin" });
  }
};



// Login Endpoint
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await Admin.findOne({ email });
    console.log(admin)
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    console.log(1)

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    console.log(2)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    console.log(3)

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
    console.log(4)
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};

export default {adminSignup , adminLogin}