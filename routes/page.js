var express = require('express');
var router = express.Router();

router
  .post('/', middlewares.createPage, controllers.createPage);

router
  .get('/:id', middlewares.readPage, controllers.readPage);

router
  .get('/', middlewares.listPage, controllers.listPage);

router
  .put('/:id', middlewares.editPage, controllers.editPage);

router
  .delete('/:id', middlewares.removePage, controllers.removePage);

module.exports = router;
