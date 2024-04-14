const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const auth = require("../middleware/auth");


router.get("/", async(req, res) => {
    try {
        // const master = await master_shop.find()
    
        res.render("login", {
            success: req.flash('success'),
            errors: req.flash('errors'),
            // master_shop : master
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;