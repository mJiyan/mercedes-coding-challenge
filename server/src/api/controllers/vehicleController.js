'use strict';
const axios = require('axios'),
    { API_ENDPOINT } = process.env;

exports.get_the_vehicles = async (req, res) => {
    const url = API_ENDPOINT + req.url;
    const token = req.headers.authorization;

    const config = {
        headers: {
            'Authorization': token
        }
    };

    await axios.get(url, config)
        .then(result => {
            res.json(result.data);
        })
        .catch((err) => {
            res.json(err);
        });
}


exports.get_the_vehicle_details = async (req, res) => {
    const url = API_ENDPOINT + req.url;
    const token = req.headers.authorization;

    const config = {
        headers: {
            'Authorization': token
        }
    };

    await axios.get(url, config)
        .then(result => {
            res.json(result.data);
        })
        .catch((err) => {
            res.json(err);
        });
}
