import express from "express";
import { sendOtp, verifyOtp, resetPassword } from "../controllers/isAuth.js";



const ForgotRouter = express.Router();

ForgotRouter.post("/send-otp", sendOtp);
ForgotRouter.post("/verify-otp", verifyOtp);
ForgotRouter.post("/reset-password", resetPassword);

export default ForgotRouter;
