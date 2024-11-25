import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './components/order/paymentform'; // Assuming the path is correct

// Load Stripe publishable key
const stripePromise = loadStripe('pk_test_51QCNfO05mxxRnIKxAjCj8WkVp4FlMPRWaPuXmwuqEt0fvK2YtuwabydNlPKZLfpQyhajRS6wBSIZeVOeHSKP392000wa8lgdFZ');

// Render the App wrapped with Stripe Elements
ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <CheckoutPage />  {/* Render your CheckoutPage component here */}
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
