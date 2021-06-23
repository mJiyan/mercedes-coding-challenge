const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  helmet = require('helmet'),
  morgan = require('morgan'),
  { logger } = require('../config'),
  routeManager = require('../api/routes/routeManager'),
  { DoorStatus } = require('../models');




module.exports = ({ app }) => {

  //To serve static files such as images, CSS files, and JavaScript files
  app.use(express.static('public'));

  //Used to enable CORS with various options.
  app.use(cors({ origin: ['http://localhost:3000'] }));
  app.get('/', (req, res) => res.json('Welcome to node-api. http://localhost:8081'));

  //Extracts the entire body portion of an incoming request stream and exposes it on req. body
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  app.use(bodyParser.json({ limit: '5mb' }));

  //Simplifies the process of logging requests
  app.use(morgan('dev'));

  //Helps secure HTTP headers returned by your Express apps.
  app.use(helmet());

  routeManager(app);


  /// error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    const errors = {
      status: err.status,
      message: err.message,
      documentation_url: err.documentation_url
    }
    res.json({ errors })
    logger.error(JSON.stringify({ errors }))
  });

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err['status'] = 404
    next(err)
  });

}
