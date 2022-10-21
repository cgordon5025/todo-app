const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);
//note DO NOT change the port in this section
//MYSQL is created on port 3306, so we want to call the database from where it is stored
module.exports = sequelize;
