import express from 'express';
import {emailverification, login,logout,register, verifyOtp} from '../controllers/authController.js'
import userAuth from '../middlewares/userAuth.js';

export const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',logout)
authRouter.post('/send-verify-otp',userAuth,verifyOtp)
authRouter.post('/verify-account',userAuth,emailverification)
