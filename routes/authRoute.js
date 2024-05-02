import express from 'express';
import authController from '../controllers/authController.js';

//router object 
const router=express.Router();

//routing
//register method post
router.post('/register',authController);

export default router;