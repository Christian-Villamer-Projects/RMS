const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = require("../../controller/admin/userController")

router.get("/adduser", userController.addUser);
// router.post("/", loginController.LoginPost);





module.exports = router;