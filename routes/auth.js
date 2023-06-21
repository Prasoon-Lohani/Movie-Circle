const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { createToken } = require('../controllers/auth');

const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('login');
});

router.post('/signup',createToken,async (req, res)=>{
    const password = await  bcrypt.hash(req.body.user.password, 10);
    const user = new User({...req.body.user, password: password});
    await user.save();
    res.render('dashboard', {user});
    });

router.post('/login', createToken,async (req, res)=>{
    const user = await User.findOne({username: req.body.user.username});
    // console.log(await bcrypt.compare(req.body.user.password, user.password));
    if(user && await bcrypt.compare(req.body.user.password, user.password))
    res.render('dashboard', {user});
    else
    res.redirect('/login');
});

router.get('/logout', (req, res)=>{
    res.clearCookie('authorization');
    res.redirect('/')
})

module.exports = router;