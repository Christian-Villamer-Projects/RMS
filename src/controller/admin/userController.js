const { users } = require("../../../models")


const addUser = async (req, res) => {
    try {

        res.render("admin/add_user", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
        
    } catch (error) {
        
    }
}





module.exports = {
    addUser,
};