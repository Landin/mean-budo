var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    cardModel = require('../models/Card'),
    loggswipeModel = require('../models/Loggswipe');
    todoModel = require('../models/Todo');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  userModel.createDefaultUsers();
  todoModel.createDefaultTodos();
};