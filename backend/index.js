const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/index.js");
const cookieParser = require("cookie-parser");
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", router);
app.use(cookieParser());

const PORT = 8000 || process.env.PORT;
connectDB();

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
