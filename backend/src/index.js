import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // Middleware to parse JSON bodies[basically user le pathako data haru catch garna lai]
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/messages", messageRoutes); // Message routes

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  connectDB();
});
