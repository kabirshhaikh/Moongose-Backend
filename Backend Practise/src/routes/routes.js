const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userAuthentication = require("../Middlewear/userMiddlewear");

router.get(
  "/middlewear",
  userAuthentication.authenticateUser,
  userController.authenticatedUser
);
router.get("/getTheUser", userController.getUser);
router.get("/getSingleUser/:id", userController.getSingleUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);
router.post("/createUser", userController.postUser);

module.exports = router;
