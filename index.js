const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db")

const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const companyRoutes = require("./routes/companies")
const answerRoutes = require("./routes/answers")
const questionRoutes = require("./routes/questions")
const resultRoutes = require("./routes/userResult")
const testRoutes = require("./routes/test")
const categoryRoutes = require("./routes/testCategories")
const finishedTestRoutes = require("./routes/finishedTests")
const statisticsRoutes = require("./routes/statistics")


const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/companies", companyRoutes);
app.use("/answers", answerRoutes);
app.use("/questions", questionRoutes);
app.use("/results", resultRoutes);
app.use("/test", testRoutes);
app.use("/categories", categoryRoutes);
app.use("/finishedTests", finishedTestRoutes)
app.use("/statistics", statisticsRoutes)

// Config
db();
dotenv.config();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
