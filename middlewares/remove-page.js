// file: middlewares/remove-page.js - created at 2014-10-04, 01:51
function removePageHandler(req, res, next) {
  debug('remove page handler');
  var Page = models.Page;
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

  function pageRemoveHandler(err, result) {
    debug('page remove handler');
    debug(util.inspect(err));
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Page
    .update({ _id: id }, { hidden: true }, pageRemoveHandler);
}
module.exports = exports = removePageHandler;
