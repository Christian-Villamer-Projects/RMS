const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require("../../models");
const signUpController = require("../controller/signupController")
// const auth = require("../middleware/auth");


router.get("/", loginController.LoginGet);
router.post("/", loginController.LoginPost);





module.exports = router;