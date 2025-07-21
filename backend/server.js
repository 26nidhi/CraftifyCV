// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 4000;

// Middleware to handle CORS
app.use(cors());

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// ✅ API Root Route
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
