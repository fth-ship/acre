// file: controllers/create-page.js - created at 2014-10-04, 12:50
function createPageHandler(req, res) {
  debug('controller create page handler');
  res.send(res.locals.out);
}
module.exports = exports = createPageHandler;
