// file: controllers/read-page.js - created at 2014-10-04, 01:15
function readPageHandler(req, res) {
  debug('read page handler');
  res.send(res.locals.out);
}
module.exports = exports = readPageHandler;
