const bcrypt = require('bcryptjs');
const { users } = require("../../models")
const LoginGet = async (req, res) => {
    try {
        res.render("login", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
    } catch (error) {
        console.log(error);
    }
}


const LoginPost = async (req, res) => {
    try {
        const { username, password } = req.body
        const User = await users.findOne({ where: { username: username }});
        const passwordMatches = bcrypt.compareSync(password, User.password);
        if(passwordMatches){
            req.flash('success', `Login Successful`)
            res.redirect("/admin/")
        }else{
            req.flash('error', `Login Failed`)
            res.redirect("/login")
        }
    } catch (error) {
        req.flash('errors', `Login Failed`)
        res.redirect("/login")
    }
}

module.exports = {
    LoginGet,
    LoginPost
};