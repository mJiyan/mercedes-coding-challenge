const expressLoader = require('./express'),
      mongooseLoader = require('./mongoose');

module.exports = async ({ app }) => {
  await mongooseLoader();
  await expressLoader({ app });
};