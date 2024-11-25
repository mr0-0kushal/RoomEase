import express from 'express'
import { signup, login } from '../controllers/user.controller.js'


// import { createPaymentIntent } from '../controllers/payment.controller.js';

const router = express.Router();

// Add the payment route
// router.post('/create-payment-intent', createPaymentIntent);


router.post('/signup', signup);
router.post('/login', login);

const userRouter = router;
export default userRouter;







