const express = require("express");
const User = require("../model/User");

//Endpoint to GET ALL USERS
const getUser = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ message: "All users from database", allUsers });
  } catch (err) {
    console.log(err);
  }
};

//Endpoint to GET SPECFIC USER
const getSingleUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const singleUserData = await User.findById(userId);
    if (!userId) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Found!", singleUserData });
  } catch (err) {
    console.log(err);
  }
};

//Endpoint to CREATE A USER
const postUser = async (req, res, next) => {
  //Extract the data from body
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender;
  const age = req.body.age;
  try {
    const user = new User({
      firstName,
      lastName,
      gender,
      age,
    });
    const savedUser = await user.save();
    res.status(201).json({ message: "User Created", savedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Endpoint to DELETE A USER
const deleteUser = async (req, res, next) => {
  const userIdToDelete = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(userIdToDelete);
    if (!deleteUser) {
      res.json({ message: "Unable to delete the user" });
    }
    res.json({ message: "User deleted successfully!" });
  } catch (err) {
    console.log(err);
  }
};

//Endpoint to UPDATE USER DATA
const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          gender: userData.gender,
          age: userData.age,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      res.status(400).json({ message: "Unable to update the User" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully!", data: updatedUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUser,
  postUser,
  getSingleUser,
  deleteUser,
  updateUser,
};