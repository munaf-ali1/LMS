import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student"
  },
  isVerified: { type: Boolean, default: false },

  // otp field
   resetOtp: String,
  resetOtpExpire: Date,

});

export default mongoose.model("User", userSchema);
