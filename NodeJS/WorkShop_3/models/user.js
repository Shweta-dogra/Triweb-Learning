const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('usertable', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// const User = sequelize.define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';
    
// });

module.exports = User;
