import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080;

//Middleware
app.use(bodyParser.json());

//Using Cors for Specific Origin
app.use(
  cors({
    origin: process.env.CLIENT,
    methods: ["GET", "POST"],
  })
);

//Database Connection
connectDB();

//Route
app.use("/products", productRoutes);
app.use("/user", userRoutes);

//Running server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
