const PORT = process.env.PORT || 5000;
const router = require("./routes");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dbName = "BetBDT";
const username = "betbdtofficial";
const password = "npyBRXPOfIsFw1Pf";


var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user" , router);

const uri = `mongodb+srv://${username}:${password}@cluster0.lrtdf.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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
