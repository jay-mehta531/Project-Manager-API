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

// const fetchPosts = async () =>  {
//   const options = {
//     method:'POST',
//     url: 'http://localhost:4000/api/user/login',
//     data:{
//     "email": "201701446@daiict.ac.in",
//     "password": "Rc#26042000"
// },
//   }
//   const res = await axios(options);
//   console.log(res);
//   }

//   fetchPosts();
// const fetchPosts = async () =>  {
//   const res = await axios.get('http://localhost:4000/api/project/'  ,{headers:{
//       'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…zNjN9.whh_Cfms6jPoB5n-Ov0j3LwH0dk68qBh7ltW3cKbeQs',
//     }});
// console.log(res);
//   }

//   fetchPosts();
