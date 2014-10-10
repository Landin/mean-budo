define([
  'app',
  'card/mvCard',
  'card/mvCardCtrl',

], function (app, mvCard, mvCardCtrl) {

  app
    .config(function ($stateProvider, routeRoleChecks) {
      $stateProvider
        .state('card', {
          url:         '/cards',
          templateUrl: '/app/card/cards.html',
          controller:  'mvCardCtrl',
          controllerAs: 'vm',
          resolve:     routeRoleChecks.admin
        })

    })
    .factory('mvCard', mvCard)
    .controller('mvCardCtrl', mvCardCtrl);
    
  return app;
});