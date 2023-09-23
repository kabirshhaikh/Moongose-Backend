const express = require("express");
const User = require("../model/User");

const authenticateUser = async (req, res, next) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (user) {
      req.userDetail = user;
      next();
    } else {
      res.status(404).json({
        message: "User not found! You cannot access this endpoint",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  authenticateUser,
};
