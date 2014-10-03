'use strict';

    // Module dependencies.

var Card = require('mongoose').model('Card');

//  _ = require('lodash');


    // Find Card by RFID

exports.card = function(req, res, next, id) {
  Card.load(id, function(err, card) {
    if (err) return next(err);
    if (!card) return next(new Error('Failed to load card ' + id));
    req.card = card;
    next();
  });
};

    // Create an card

exports.create = function(req, res) {
  var card = new Card(req.body);
  card.user = req.user;

  card.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the card'
      });
    }
    res.json(card);

  });
};

    // Update an article
/*
exports.update = function(req, res) {
  var article = req.article;

  article = _.extend(article, req.body);

  article.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the article'
      });
    }
    res.json(article);
  });
};
*/

    // Delete an article

exports.destroy = function(req, res) {
  //return res.json(200, { card });
  var card = req.card;
    
  card.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the card'
      }
    );
    }
    res.json(card);

  });
};


   // Show an article
/*
exports.show = function(req, res) {
  res.json(req.article);
};
*/

    // Get of all Cards
 
exports.all = function(req, res) {
  Card.find().sort('-created').populate('user', 'name username').exec(function(err, cards) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the cards'
      });
    }
    res.json(cards);

  });
};