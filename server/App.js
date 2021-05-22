const PORT = process.env.PORT || 5000;
const router = require("./routes");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
// var corsOptions = {
//   origin: "https://betbdt.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user" , router);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lrtdf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Database</h1>");
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, console.log(`Server is Running on PORT ${PORT}`));
  });
