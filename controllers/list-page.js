// file: controllers/list-page.js - created at 2014-10-04, 01:23
function listPageHandler(req, res) {
  debug('controller list page handler');
  res.send(res.locals.out);
}
module.exports = exports = listPageHandler;
