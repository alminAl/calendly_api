require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const userRoute = require("./routes/userRoutes");
const scheduleRoute = require("./routes/scheduleRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");

// express app
const app = express();
// cors
app.use(cors());

// middleware
app.use(express.json());

// route
app.get("/", async (req, res) => {
  res.status(200).json({ api: "calendly api 📕" });
});

app.use("/api/auth", userRoute);
app.use("/api/schedule", scheduleRoute);

app.use("/api/user/profile", userProfileRoutes);

// connect to DB
mongoose
  .connect(`${process.env.MONGO_DB_URL}`)

  .then(() => {
    // listen for request
    app.listen(4000, () => {
      console.log("I on listen for port 4000 😎");
    });
  })
  .catch((error) => {
    console.log(error);
  });
