import express from 'express'
import authenticateAdmin from '../middleware/auth.middleware.js'
import adminObj from '../controllers/admin.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import {createRoom } from '../controllers/room.controller.js'

const {adminSignup , adminLogin} = adminObj

const router = express.Router();

router.post('/signup', adminSignup); // Signup route
router.post('/login', adminLogin);   // Login route
router.post('/create',  upload.array('images', 5) , createRoom);

//new 



const adminRouter = router
export default adminRouter
