// file: controllers/remove-page.js - created at 2014-10-04, 01:51
function removePageHandler(req, res) {
  debug('controller remove page handler');
  res.send(res.locals.out);
}
module.exports = exports = removePageHandler;
