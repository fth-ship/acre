var express = require('express');
var router = express.Router();

router
  .post('/', middlewares.createPage, controllers.createPage);

router
  .get('/:id', middlewares.readPage, controllers.readPage);

module.exports = router;
