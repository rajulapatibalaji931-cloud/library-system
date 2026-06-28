
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err.message);
  });
app.get("/", (req, res) => {
  res.send("📚 Library Management API is Running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${5000}`);
});
