const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

//Import Routes
const authRoute = require("./routes/auth");
const projectRoute = require("./routes/project");

dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB!!");
});

//Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/project", projectRoute);

app.listen(4000, () => {
  console.log("Server is up and running...");
});
