const pino = require('pino');

const logger = pino({
  level: "debug",
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    messageFormat: false,
    translateTime: 'dd-mm-yy HH:MM:ss.l',
    ignore: 'pid,hostname' // --ignore,
  },
  serializers: {
    res(res) {
      // the default
      return {
        //res,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage
      }
    },
    req(req) {
      return {
        method: req.method,
        url: req.url,
        path: req.path,
        // Including the body and headers in the log could be in violation 
        // of privacy laws, e.g. GDPR. You should use the "redact" option to
        // remove sensitive fields. It could also leak authentication data in
        // the logs.
        body: req.body,
      }
    }
  }
})


module.exports = logger;
