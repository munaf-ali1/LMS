import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import studentRouter from "./routes/student.route.js";
import ForgotRouter from "./routes/forgot.route.js";


dotenv.config();

const PORT = process.env.PORT || 5000;



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))




app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/student",studentRouter);
app.use("/api/forgot",ForgotRouter);

app.get("/", (req, res) => {
  res.send("API Running...");
});





(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})();
