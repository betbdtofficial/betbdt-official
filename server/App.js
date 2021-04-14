const router = require("./routes");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dbName = "BetBDT";
const username = "betbdtofficial";
const password = "npyBRXPOfIsFw1Pf";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', router)

const uri = `mongodb+srv://${username}:${password}@cluster0.lrtdf.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5050;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, console.log(`Server is Running on PORT ${PORT}`));
  });
