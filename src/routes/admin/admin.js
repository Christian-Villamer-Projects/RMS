const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require("../../../models");
// const loginController = require("../controller/loginController")


// router.get("/", loginController.LoginGet);
// router.post("/", loginController.LoginPost);





module.exports = router;