const { users } = require("../../../models")


const dashboard = async (req, res) => {
    try {

        res.render("admin/admin", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
        
    } catch (error) {
        
    }
}


const usersGet = async (req, res) => {
    try {
        const usersData = await users.findAll();
        // res.json(usersData);
        // return;
        res.render("admin/user", {
            success: req.flash('success'),
            errors: req.flash('errors'),
            data: usersData
        })
        
    } catch (error) {
        
    }
}



module.exports = {
    dashboard,
    usersGet
};