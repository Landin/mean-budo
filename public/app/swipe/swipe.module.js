define([
  'app',
  'swipe/mvSwipeCtrl'

], function (app, mvSwipeCtrl) {

  app
    .config(function ($stateProvider, routeRoleChecks) {
      $stateProvider
        .state('swipe', {
          url:         '/swipe',
          templateUrl: '/app/swipe/swipe.html',
          controller:  'mvSwipeCtrl',
          controllerAs: 'vm',
          resolve:     routeRoleChecks.admin
        })

    })
    .controller('mvSwipeCtrl', mvSwipeCtrl);

  return app;
});
