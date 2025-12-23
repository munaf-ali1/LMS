import express from "express";
import { register, login, sendOtp, verifyOtp, resetPassword, signOut } from "../controllers/isAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/send-otp", sendOtp);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/signout", signOut);

export default authRouter;
