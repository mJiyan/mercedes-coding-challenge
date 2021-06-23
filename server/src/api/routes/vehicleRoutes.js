'use strict';

module.exports = (app) => {
    const vehicleFunctions = require('../controllers/vehicleController');

    app.route('/vehicles')
        .get(vehicleFunctions.get_the_vehicles);
    app.route('/vehicles/:id')
        .get(vehicleFunctions.get_the_vehicle_details);

}