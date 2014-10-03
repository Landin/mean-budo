'use strict';

    // Module dependencies.
 
var Loggswipe = require('mongoose').model('Loggswipe');
    //  _ = require('lodash');

    // Create an swipe for loggswipe view

exports.create = function(card) {
  //var loggswipe = new Loggswipe(req.body);

  console.log('Vi har: ' + card);
  var body = {
      "rfid": card.rfid,
      "fnamn": card.fnamn,
      "enamn": card.enamn
  };

  var loggswipe = new Loggswipe(body);
    //loggswipe.user = req.user;

  loggswipe.save(function(err) {
    if (err) {
        console.log('fel i logswipe save: ' + err);
        return 'Cannot save the swipe';
      //return res.json(500, {
      //    error: 'Cannot save the swipe'
      //});
    }
      console.log('har utfört logswipe.save');
  });
};

exports.all = function(req, res) {
  Loggswipe.find().sort('-created').populate('user', 'name username').exec(function(err, loggswipe) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the swipes'
      });
    }
    res.json(loggswipe);
  });    
};