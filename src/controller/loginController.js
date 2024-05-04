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
        res.json(User);
        // c
        // res.status(200).json({ passValid : passwordMatches })

        // res.json(req.body)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    LoginGet,
    LoginPost
};