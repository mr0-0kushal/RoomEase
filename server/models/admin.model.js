import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Admin ka naam
  email: { type: String, required: true, unique: true }, // Unique email for login // Hashed password
  otp: { type: String }, // Temporary OTP for verification
  otpExpiry: { type: Date }, // OTP expiry time
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin
