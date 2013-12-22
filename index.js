
var extend = require('extend');
var onResponse = require('on-response');

/**
 * Expose `generate`.
 */

module.exports = generate;

/**
 * Generate a request logging middleware.
 *
 * @param {Logger} logger
 * @return {Function}
 */

function generate (logger) {
  return function requestLog (req, res, next) {
    onResponse(req, res, function (err, summary) {
      var status = summary.response.status;
      var log = logger.info;
      if (status >= 500) {
        log = logger.error;
        extend(summary.request, { body: req.body });
      }
      else if (status >= 400) {
        log = logger.warn;
        extend(summary.request, { body: req.body });
      }

      var msg = format(summary);
      log.bind(logger)(msg, summary);
    });

    next();
  };
}

/**
 * Formats the request log message.
 *
 * @param {Object} summary
 * @return {String}
 */

function format (summary) {
  var request = summary.request;
  var response = summary.response;
  var msg = 'Request processed';
  if (response.status >= 500) msg = 'Internal error';
  else if (response.status >= 400) msg = 'Malformed request';
  msg += ' (' + response.status + ') ';
  return msg + request.method + ' ' + request.url + ' ' +
    response.time + 'ms';
}