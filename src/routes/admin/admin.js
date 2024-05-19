const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminController = require("../../controller/admin/adminController")


router.get("/", adminController.dashboard);
// router.post("/", loginController.LoginPost);





module.exports = router;