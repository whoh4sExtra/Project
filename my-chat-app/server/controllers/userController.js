const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req,res,next) => {
    try {
        const { username, password } = req.body;
        const uCheck = await User.findOne({ username });
        if (uCheck)
          return res.json({
             msg: "Username already used", 
             status: false 
            });
        const user = await User.create({
          username,
          password,
        });
        return res.json({ status: true, user });
      } catch (ex) {
        next(ex);
      }
};

module.exports.login = async (req,res,next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    if (password  !== user.password )
      return res.json({ msg: "Incorrect Username or Password", status: false });
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params._id } });
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};