require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const userRoute = require("./routes/userRoutes");

// express app
const app = express();
// cors
app.use(cors())

// middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "calendly" });
});


app.use("/api/auth", userRoute)



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
