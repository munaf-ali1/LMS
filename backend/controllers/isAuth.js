import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/sendEmail.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  res.status(201).json({ message: "User registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, user });
};

export const signOut=async(req,res)=>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:365*24*60*60*1000
        })
        return res.status(201).json({message:"User logged out successfully"});
    } catch (error) {
        return res.status(500).json({message:"error in signout",error:error.message});
    }
}



export const sendOtp = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  user.resetOtp = otp;
  user.resetOtpExpire = Date.now() + 5 * 60 * 1000;
  await user.save();

  await sendEmail(email, otp);

  res.json({ message: "OTP sent to email" });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.resetOtp !== otp || user.resetOtpExpire < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  res.json({ message: "OTP verified" });
};

export const resetPassword = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = await bcrypt.hash(password, 10);
  user.resetOtp = undefined;
  user.resetOtpExpire = undefined;

  await user.save();

  res.json({ message: "Password reset successful" });
};

