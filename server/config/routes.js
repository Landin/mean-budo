var auth = require('./auth'),
  users = require('../controllers/users'),
  todos = require('../controllers/todos'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Todo = mongoose.model('Todo'),

  // Budo
  cards = require('../controllers/cards'),
  swipes = require('../controllers/swipe'),
  loggswipes = require('../controllers/loggswipe'),
  Card = mongoose.model('Card'),
  Loggswipe = mongoose.model('Loggswipe'),

  expressJwt = require('express-jwt');

module.exports = function(app, config) {

  // Secure /api routes with JWT
  app.use('/api', expressJwt({secret: config.secret}).unless({path: ['/api/todo']}));

  app.get('/api/todos', todos.getTodos);
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  // Card
  app.get('/api/cards', cards.all);
  app.delete('/api/cards/:cardId', cards.destroy);
  app.post('/api/cards', cards.create);
  // app.put('', cards.update);  
  app.param('cardId', cards.card);

  // Swipe
  app.post('/api/swipe', swipes.process);
  app.get('/api/loggswipes', loggswipes.all);

    
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

  app.post('/login', function(req, res, next) {
    auth.authenticate(req, res, next, config);
  });

  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    res.render('index.ejs');
  });
};