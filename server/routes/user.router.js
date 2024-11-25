import express from 'express'
import {createUser , sendOtpToEmail , verifyOtp} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/signup', createUser);
router.post('/signup', createUser);

router.post('/send-otp', sendOtpToEmail);
router.post('/verify-otp', verifyOtp);

const userRouter = router;
export default userRouter;







