const express = require("express");
// Models
const Movie = require("../models/movie");
const { findUser } = require("../controllers/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await findUser(req.cookies.authorization);
  const movieList = await Movie.find().populate({
    path: "comments",
    populate: [
      {
        path: "ref",
      },
    ],
  });
  res.render("index", { movieList, user });
});

module.exports = router;
