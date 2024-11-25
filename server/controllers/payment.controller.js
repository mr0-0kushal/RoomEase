// import Stripe from 'stripe';

// // Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export const createPaymentIntent = async (req, res) => {
//   const { amount } = req.body; // Amount should be in cents, e.g., $10.00 = 1000 cents

//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'inr', // Use your currency code, e.g., 'inr' for INR
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret, // Send the client secret to the frontend
//     });
//   } catch (error) {
//     res.status(500).send({
//       error: error.message,
//     });
//   }
// };
