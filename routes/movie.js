const express = require("express");
// Models
const Movie = require("../models/movie");

const router = express.Router();

router.get("/get", async (req, res) => {
  const movielist = await fetch(
    `${process.env.TMDB_BASE_URL}discover/movie?api_key=${process.env.TMDB_KEY}`
  ).then((response) => response.json());
  // console.log(`${process.env.TMDB_BASE_URL}discover/movie?api_key=${process.env.TMDB_KEY}`);
  const { results } = movielist;
  results.map(async (movieObj) => {
    const movie = new Movie(movieObj);
    await movie.save();
    // console.log(movie);
  });
  res.redirect("/movie/list");
});

router.get("/list", async (req, res) => {
  const movieList = await Movie.find({});
  console.log(movieList);
  // console.log("From List",movieList);
  res.redirect('/');
});

router.post("/movie/:_id/comment", async (req, res) => {
  const id = req.params._id;
  const comment = req.body.comment;
  const movie = await Movie.findOne({ _id: id });
  movie.comments.push(comment);
  movie.save();
  //  console.log(id, comment, movie);
  res.redirect("/movie/movie/list");
});
module.exports = router;
