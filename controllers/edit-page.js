// file: controllers/edit-page.js - created at 2014-10-04, 01:34
function editPageHandler(req, res) {
  debug('edit page handler');
  res.send(res.locals.out);
}
module.exports = exports = editPageHandler;
