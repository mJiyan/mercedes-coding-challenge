'use strict'
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let DoorStatusSchema = new Schema({
    vehicle_id: { type: String, index: { unique: true } },
    doorstatusfrontleft: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusfrontleft: { value: String, retrievalstatus: String, timestamp: Number },
    doorstatusfrontright: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusfrontright: { value: String, retrievalstatus: String, timestamp: Number },

    doorstatusrearright: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusrearright: { value: String, retrievalstatus: String, timestamp: Number },
    doorstatusrearleft: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusrearleft: { value: String, retrievalstatus: String, timestamp: Number },

    doorlockstatusdecklid: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusgas: { value: String, retrievalstatus: String, timestamp: Number },
    doorlockstatusvehicle: { value: String, retrievalstatus: String, timestamp: Number }
});


module.exports = mongoose.model('DoorStatus', DoorStatusSchema);