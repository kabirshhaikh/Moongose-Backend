const express = require("express");
const jwt = require("jsonwebtoken");
const secretKey = "1234567890";
const generateToken = (user) => {
  return jwt.sign({ user }, secretKey, { expiresIn: "1h" });
};
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.user;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  generateToken,
  verifyToken,
};
