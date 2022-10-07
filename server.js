require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/user", userRoute)

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "calendly" });
});

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
