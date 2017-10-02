"use strict";

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface
            .createTable('Users', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                isAdmin: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                confirmation_code: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                confirmed: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: Sequelize.DATE
            });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface
            .dropTable('Users');
    }
};