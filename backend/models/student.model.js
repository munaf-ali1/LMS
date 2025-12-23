import mongoose from "mongoose";
import User from "../models/user.model.js";


const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  email: String,
  course: String,
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Student", studentSchema);
