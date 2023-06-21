require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Modles
const Movie = require("./models/movie");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// mongoose.connect(process.env.MONGODB_URL).then()
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongodb connected");
});
db.once("error", (err) => console.log(err));

// Routes
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/auth');
const movieRoute = require('./routes/movie');
const loggedRoute = require('./routes/loggedFunctions');
// controllers
const { verifyToken } = require("./controllers/auth");

app.use("/", indexRoute);
app.use('/auth', loginRoute);
app.use('/movie', movieRoute);
app.use('/logged',verifyToken, loggedRoute);

app.listen(process.env.PORT, () => {
  console.log("Sever Started");
});
