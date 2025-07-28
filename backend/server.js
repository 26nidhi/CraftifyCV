// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 4000;

// Middleware to handle CORS
app.use(cors());

// Connect Database
connectDB();

// Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
