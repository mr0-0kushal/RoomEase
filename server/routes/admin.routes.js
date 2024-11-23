import express from 'express'
import authenticateAdmin from '../middleware/auth.middleware.js'
import adminObj from '../controllers/admin.controller.js'
const {adminSignup , adminLogin} = adminObj

const router = express.Router();

router.post('/signup', adminSignup); // Signup route
router.post('/login', adminLogin);   // Login route

const adminRouter = router
export default adminRouter
