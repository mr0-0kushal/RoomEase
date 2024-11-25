import express from 'express'
import { signup, login } from '../controllers/user.controller.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

const userRouter = router;
export default userRouter;







