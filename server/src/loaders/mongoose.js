const mongoose = require('mongoose'),
      { api } = require('../config');

module.exports = async () => {
  await mongoose.connect(api.dbUri, { useNewUrlParser: true, useCreateIndex: true }, err => {
    if (err) {
      console.error(err)
      throw err;
    }
    console.log('Mongoose connected!')
  });
};
      