const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require("../../models");
const signUpController = require("../controller/signupController")
// const auth = require("../middleware/auth");


router.get("/", signUpController.signUpView);
router.post("/", signUpController.CreateUser);





module.exports = router;