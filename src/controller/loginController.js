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

module.exports = {
    LoginGet
};