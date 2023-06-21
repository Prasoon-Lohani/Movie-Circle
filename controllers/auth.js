const jwt = require("jsonwebtoken");
// Models
const User = require("../models/user");

module.exports.createToken = async (req, res, next) => {
  const { username } = req.body.user;
  const user = await User.findOne({ username });  
  const token = jwt.sign({ _id:user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("authorization", "bearer " + token);
  next();
};

module.exports.verifyToken = async (req, res, next) => {
  const bearerToken = req.cookies.authorization;
  if (bearerToken) {
    const user = this.findUser(bearerToken)
    if (user) next();
    else res.redirect("/auth/login");
  } else res.redirect("/auth/login");
};

module.exports.findUser = async(bearerToken)=>{
    if(bearerToken){
        const token = bearerToken.split(" ")[1];
        const _id = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findOne({ _id });
        return user;
    }
    else{
        return null;
    }
}