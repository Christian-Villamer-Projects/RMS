const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require("../../models");
const loginController = require("../controller/loginController")
// const auth = require("../middleware/auth");


router.get("/", loginController.LoginGet);





module.exports = router;