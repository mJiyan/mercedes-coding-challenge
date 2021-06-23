'use strict';
const authRoutes = require('./authRoutes'),
    vehicleRoutes = require('./vehicleRoutes'),
    doorRoutes = require('./doorRoutes');


module.exports = app => {

    authRoutes(app);
    vehicleRoutes(app);
    doorRoutes(app);

};