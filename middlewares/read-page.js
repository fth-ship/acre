// file: middlewares/read-page.js - created at 2014-10-04, 01:15
function readPageHandler(req, res, next) {
  debug('read page handler');
  var Page = models.Page;
  var body = req.body;
  var id = req.params.id;

  res.locals.out = { err: null, result: {}, status: false };

  function successHandler(result) {
    debug('success handler');
    res.locals.out.status = true;
    res.locals.out.result = result;
    next();
  }

  function failHandler(err) {
    debug('fail handler');
    res.locals.out.err = err;
    next(err);
  }

  function pageFindOneHandler(err, result) {
    debug('page find one handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Page
    .findOne({ _id: id, hidden: false }, pageFindOneHandler);
}
module.exports = exports = readPageHandler;
