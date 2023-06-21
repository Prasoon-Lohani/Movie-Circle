const express = require('express');
// Models
const User = require('../models/user');
const Movie = require('../models/movie');
const { findUser } = require('../controllers/auth');

const router = express.Router();

router.post('/movie/:movie_id/comment', async (req, res)=>{
    const {movie_id} = req.params;
    const {comment} = req.body;
    const user = await findUser(req.cookies.authorization);
    const movie = await Movie.findOne({_id: movie_id});
    movie.comments.push({comment, ref: user._id});
    await movie.save();
    user.comments.push({comment, movie: movie._id});
    await user.save();
    res.redirect('/');
})

module.exports = router;