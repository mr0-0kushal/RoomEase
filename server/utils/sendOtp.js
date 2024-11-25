// import { SMTPClient } from 'emailjs'

// const client = new SMTPClient({
//   user: process.env.email,
//   password: process.env.pass,
//   host: 'smtp.gmail.com',
//   ssl: true,
// });

// const sendOtp = (email, otp) => {
//   client.send(
//     {
//       text: `Your OTP is: ${otp}`,
//       from: process.env.email,
//       to: email,
//       subject: 'Your OTP for Login',
//     },
//     (err, message) => {
//       if (err) {
//         console.error('Error sending email:', err);
//       } else {
//         console.log('Email sent successfully:', message);
//       }
//     }
//   );
// };





import nodemailer from "nodemailer"

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
  port: 587,
  secure: false, // You can use another email provider as needed
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
