const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require("../../models");
// const auth = require("../middleware/auth");


router.get("/", async(req, res) => {
    try {
        res.render("login", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;