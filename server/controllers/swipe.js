'use strict';
var loggswipe = require('../controllers/loggswipe');

    // Module dependencies.
var mongoose = require('mongoose'),
    Card = mongoose.model('Card');
    //, _ = require('lodash/dist/lodash.underscore');

function talktoangular(res, status, name) {
    res.json({"status": status, "fullname": name});
}

// Search for Card with RFID and return its name
exports.process = function(req, res, next) {
    var status = 'ERROR:',
        name = 'Number was not entered',
        number = req.param("number");
    
    if (number) {
          Card.findOne({ 'rfid': number }, 'rfid fnamn enamn', function (err, card) {
            if (err) return next(new Error('Database Error ' + number));

            if (card) {
                   status = 'OK';
                   name = card.fnamn + ' ' + card.enamn;
                   loggswipe.create(card);
            } else {
                name = 'Could not find any card matching RFID ' + number;
            }
            talktoangular(res, status, name);
          });
    } else {
        console.log('fick inget nummer');
        talktoangular(res, status, name);
    }
    
};