import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/", protect, adminOnly, getAllStudents);
studentRouter.post("/", protect, adminOnly, createStudent);
studentRouter.put("/:id", protect, adminOnly, updateStudent);
studentRouter.delete("/:id", protect, adminOnly, deleteStudent);

export default studentRouter;
