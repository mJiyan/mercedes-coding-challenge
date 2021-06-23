'use strict';
const axios = require('axios'),
    qs = require('qs'),
    { CLIENT_ID, CLIENT_SECRET, CODE_URI, RESPONSE_TYPE, REDIRECT_URI, SCOPE, STATE, TOKEN_URI, API_ENDPOINT } = process.env,
    params = new URLSearchParams([
        ['response_type', RESPONSE_TYPE],
        ['client_id', CLIENT_ID],
        ['redirect_uri', REDIRECT_URI],
        ['scope', SCOPE],
        ['state', STATE]
    ]);


exports.get_the_code = (req, res) => {
    const url = CODE_URI + '?' + params;
    res.send(url);
}


exports.get_the_token = async (req, res) => {
    const code = req.query.code;
    const state = req.query.state;

    const body = {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        state: state
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }


    await axios.post(TOKEN_URI, qs.stringify(body), config)
        .then(result => {
            res.json(result.data);
        })
        .catch((err) => {
            res.json(err);
        });
}