'use strict';

module.exports = (app) => {
    const doorFunctions = require('../controllers/doorController');

    app.route('/vehicles/:id/doors')
        .get(doorFunctions.get_the_vehicle_doors);
    app.route('/vehicles/:id/doors')
        .post(doorFunctions.update_the_vehicle_door_status);
    app.route('/socket.io')
        .get(doorFunctions.socket);
        
}