'use strict';


const axios = require('axios'),
    { API_ENDPOINT } = process.env,
    mongoose = require('mongoose'),
    DoorStatus = mongoose.model('DoorStatus'),
    cron = require('node-cron');;



const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

server.listen(4000);

exports.get_the_vehicle_doors = async (req, res) => {
    const url = API_ENDPOINT + req.url;
    const token = req.headers.authorization;
    const vehicleId = req.params.id;

    const config = {
        headers: {
            'Authorization': token
        }
    };


    io.on('connection', () => {
        cron.schedule('*/5 * * * * *', () => {
            console.log('setInterval');
            axios.get(url, config)
                .then(result => {
                    DoorStatus.findOne({ vehicle_id: vehicleId }, (err, door) => {
                        if (err) console.log('query error: ', err);
                        let data = result.data;
                        data = { vehicle_id: vehicleId, ...data };
                        if (
                            door.doorstatusfrontleft.value !== data.doorstatusfrontleft.value ||
                            door.doorstatusfrontright.value !== data.doorstatusfrontright.value ||
                            door.doorstatusrearright.value !== data.doorstatusrearright.value ||
                            door.doorstatusrearleft.value !== data.doorstatusrearleft.value ||
                            door.doorlockstatusvehicle.value !== data.doorlockstatusvehicle.value
                        ) {
                            DoorStatus.findOneAndUpdate({ vehicle_id: vehicleId }, data, (err, door) => {
                                if (err) console.log('query error: ', err);
                                io.sockets.emit('broadcast', { data });
                            })
                        }
                    });

                })
                .catch((err) => {
                    console.log('Error: ', err);
                });
        });

    });


    await axios.get(url, config)
        .then(result => {
            DoorStatus.findOne({ vehicle_id: vehicleId }, (err, door) => {
                if (err) console.log('query error: ', err);
                let data = result.data;
                data = { vehicle_id: vehicleId, ...data };
                if (!door) {
                    DoorStatus.create(data, (err, door) => {
                        if (err) console.log('query error: ', err);
                        console.log('door: ', door)
                    })
                }
                else if (
                    door.doorstatusfrontleft.value !== data.doorstatusfrontleft.value ||
                    door.doorstatusfrontright.value !== data.doorstatusfrontright.value ||
                    door.doorstatusrearright.value !== data.doorstatusrearright.value ||
                    door.doorstatusrearleft.value !== data.doorstatusrearleft.value ||
                    door.doorlockstatusvehicle.value !== data.doorlockstatusvehicle.value
                ) {
                    DoorStatus.findOneAndUpdate({ vehicle_id: vehicleId }, data, (err, door) => {
                        if (err) console.log('query error: ', err);
                    })
                }
            });
            res.json(result.data);
        })
        .catch((err) => {
            res.json(err);
        });
}



exports.update_the_vehicle_door_status = async (req, res) => {
    const url = API_ENDPOINT + req.url;
    const body = req.body;
    const token = req.headers.authorization;
    const vehicleId = req.params.id;


    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };

    await axios.post(url, body, config)
        .then(result => {
            if (result.data.status === 'INITIATED') {
                axios.get(url, config)
                    .then(result => {
                        DoorStatus.findOneAndUpdate({ vehicle_id: vehicleId }, data, (err, door) => {
                            if (err) console.log('query error: ', err);
                        })
                        res.json(result.data);
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            }
        })
        .catch((err) => {
            res.json(err);
        });
}



exports.socket = async (req, res) => {

    console.log('socket.io');
}

