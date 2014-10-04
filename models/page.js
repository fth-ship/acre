// file: models/page.js - created at 2014-10-04, 12:51
function pageHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;
  var timestamp = require('../plugins/timestamp');

  schema = new Schema({
    title: { type: String, required: true },
    body: { type: String },
    tag: [{ type: String }], 
    hidden: { type: Boolean, default: false },
  });
  schema.plugin(timestamp);

  return mongoose.model('Page', schema);
}
module.exports = exports = pageHandler();
