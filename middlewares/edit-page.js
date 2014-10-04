// file: middlewares/edit-page.js - created at 2014-10-04, 01:34
function editPageHandler(req, res, next) {
  debug('edit page handler');
  var Page = models.Page;
  var body = req.body;
  var id = req.params.id;

  res.locals.out = { err: null, status: false };

  function successHandler(result) {
    debug('success handler');
    res.locals.out.status = (result && (true));
    next();
  }

  function failHandler(err) {
    debug('fail handler');
    res.locals.out.err = err;
    next(err);
  }

  function pageUpdateHandler(err, result) {
    debug('page update handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Page
    .update({ _id: id }, body, pageUpdateHandler);
}
module.exports = exports = editPageHandler;
