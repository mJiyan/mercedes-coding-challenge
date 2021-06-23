'use strict';

module.exports = (app) => {
    const authFunctions = require('../controllers/authController');

    app.route('/login')
        .get(authFunctions.get_the_code);
    app.route('/redirect')
        .get(authFunctions.get_the_token);

}