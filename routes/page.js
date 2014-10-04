var express = require('express');
var router = express.Router();

router
  .post('/', middlewares.createPage, controllers.createPage);

module.exports = router;
