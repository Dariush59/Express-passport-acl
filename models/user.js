"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
        confirmation_code: { type: DataTypes.STRING, allowNull: true },
        confirmed: { type: DataTypes.BOOLEAN, allowNull: false },
    });

    return User;
};