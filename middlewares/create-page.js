// file: middlewares/create-page.js - created at 2014-10-04, 12:50
function createPageHandler(req, res, next) {
  debug('create page handler');
  var Page = models.Page;
  var body = req.body;
  
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

  function pageSaveHandler(err, result) {
    debug('page save handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Page
    .create(body, pageSaveHandler);
}
module.exports = exports = createPageHandler;
