import express from "express";
import dotenv from "dotenv";
import cors from "cors";                // ✅ Import cors
import { sequelize } from "./config/db";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();

// ✅ Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Connect to DB and start server
sequelize.sync().then(() => {
  console.log("DB connected");
  app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
  });
});
