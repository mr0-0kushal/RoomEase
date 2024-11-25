
import nodemailer from "nodemailer"

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another email provider as needed
  auth: {
    user: process.env.email, // Replace with your email
    pass: process.env.pass,   // Replace with your email password or app-specific password
  },
});

const sendOtp = (email, otp) => {
  const mailOptions = {
    from: process.env.email,
    to: email,
    subject: 'Your OTP for Login',
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default sendOtp;
