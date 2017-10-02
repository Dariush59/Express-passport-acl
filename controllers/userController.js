var models = require('../models');

var acl = require('../config/acl');
  
// console.log(models.sequelize);
var userController = {};

userController.create = (req, res) => {
    var { email, password, role } = req.body;
    if (!email) {
        res.status(500).json({
            succes: false,
            message: 'email is required.'
        });
    }
    models.User
        .create({
            email: email,
            password: password
        })
        .then(function(result) {
            console.log(email, password, role);
            acl.addUserRoles(result.id, role);
            res.status(200).json({
                succes: true,
                data: result.email
            });
        })
        .catch(function(error) {
            res.status(500).json({
                succes: false,
                message: error
            });
        });
};

userController.destroy = (req, res) => {
    models.User
        .destroy({
            where: {
                id: req.params.user_id
            }
        })
        .then(function(result) {
            res.status(200).json({
                succes: true,
                data: result
            });
        })
        .catch(function(error) {
            res.status(500).json({
                succes: false,
                message: error
            });
        });
};

module.exports = userController;