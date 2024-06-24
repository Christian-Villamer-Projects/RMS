const bcrypt = require('bcryptjs');
const { users } = require("../../models")

const signUpView = async (req, res) => {
    try {
        res.render("signup", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
    } catch (error) {
        console.log(error);
    }
}


const CreateUser = async (req, res) =>{
    try {
        const { firstname, middlename, lastname, username, password } = req.body
        const hash = bcrypt.hashSync(password, 10);
       
        const [row, created] = await users.findOrCreate({
            where:{ username : username},
            defaults: {
                first_name : firstname,
                middle_name: middlename,
                lastname : lastname, 
                password : hash,
                username : username,
                birthdate: "2024-01-01",
                birthplace: "N/A",
                role_id: 0,
                branch_id: 0,
                createdBy: "Signup",
                updatedBy: "Signup",
                
            }
        });

        // res.json(row)
        // return;
        res.render("signup", {
            success: req.flash('success'),
            errors: req.flash('errors'),
        })
        // res.json(req.body)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    signUpView,
    CreateUser
};