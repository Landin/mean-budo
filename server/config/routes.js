var auth = require('./auth'),
  users = require('../controllers/users'),
  cards = require('../controllers/cards'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Card = mongoose.model('Card'),
  data = { mvdata: {} };

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/cards', cards.all);
  app.delete('/api/cards/:cardId', cards.destroy);
  app.post('/api/cards', cards.create);
  // app.put('', cards.update);  
  app.param('cardId', cards.card);

    
//  app.route('/api/cards')
//        .get(Card.all)
//        .post(auth.requiresLogin, cards.create);
//    app.route('/api/cards/:cardId')
////    .get(card.show)
////    .put(auth.requiresLogin, hasAuthorization, cards.update)
//      .delete(auth.requiresLogin, hasAuthorization, cards.destroy);

    
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);
  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    data.mvdata.bootstrappedUser = req.user;
    res.render('index.ejs', data);
  });
};