require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movie");
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect(process.env.MONGODB_URL).then()
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongodb connected");
});
db.once("error", (err) => console.log(err));

// Routes
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
const movieRoute = require('./routes/movie');

app.use("/", indexRoute);
app.use('/login', loginRoute);
app.use('/movie', movieRoute);

app.listen(process.env.PORT, () => {
  console.log("Sever Started");
});
