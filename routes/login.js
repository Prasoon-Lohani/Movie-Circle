const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('login');
});

router.post('/auth/signup',async (req, res)=>{
    const password = await  bcrypt.hash(req.body.user.password, 10);
    const user = new User({...req.body.user, password: password});
    await user.save();
    res.render('dashboard', {user});
    });

router.post('/auth/login', async (req, res)=>{
    const user = await User.findOne({username: req.body.user.username});
    // console.log(await bcrypt.compare(req.body.user.password, user.password));
    if(user && await bcrypt.compare(req.body.user.password, user.password))
    res.render('dashboard', {user});
    else
    res.redirect('/login');

});

module.exports = router;