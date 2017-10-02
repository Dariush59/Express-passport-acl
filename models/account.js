"use strict";

module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        	account: { type: Sequelize.STRING, allowNull: false },
            hotel_logo: { type: Sequelize.STRING, allowNull: true },
            number_of_rooms: { type: Sequelize.INTEGER, allowNull: false },
            charge_cycle: { type: Sequelize.STRING, allowNull: true },
            status: { type: Sequelize.STRING, allowNull: false },
            first_name: { type: Sequelize.STRING, allowNull: false },
            last_name: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false },
            company_name: { type: Sequelize.STRING, allowNull: false },
            company_vat: { type: Sequelize.STRING, allowNull: false },
            default_locale: { type: Sequelize.STRING, allowNull: false },
            default_currency: { type: Sequelize.STRING, allowNull: false },
            stripe_credit_card_id: { type: Sequelize.STRING, allowNull: false },
            stripe_customer_id: { type: Sequelize.STRING, allowNull: false },
            stripe_subscription_id: { type: Sequelize.STRING, allowNull: false },
            ip: { type: Sequelize.STRING, allowNull: false },
            browser: { type: Sequelize.STRING, allowNull: false },
            platform: { type: Sequelize.STRING, allowNull: false },
            isDesktop: { type: Sequelize.INTEGER, allowNull: false },
            device: { type: Sequelize.STRING, allowNull: false },
            location_country_isocode: { type: Sequelize.STRING, allowNull: true },
            location_country: { type: Sequelize.STRING, allowNull: true },
            location_city: { type: Sequelize.STRING, allowNull: true },
            location_state: { type: Sequelize.STRING, allowNull: true },
            location_postal_code: { type: Sequelize.STRING, allowNull: true },
            location_lat: { type: Sequelize.STRING, allowNull: true },
            location_lon: { type: Sequelize.STRING, allowNull: true },
            location_timezone: { type: Sequelize.STRING, allowNull: true },
            location_continent: { type: Sequelize.STRING, allowNull: true }
    });

    return Account;
};