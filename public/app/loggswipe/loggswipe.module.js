define([
  'app',
  'loggswipe/mvLoggswipe',
  'loggswipe/mvLoggswipeCtrl'

], function (app, mvLoggswipe, mvLoggswipeCtrl) {

  app
    .config(function ($stateProvider, routeRoleChecks) {
      $stateProvider
        .state('loggswipe', {
          url:         '/loggswipe',
          templateUrl: '/app/loggswipe/loggswipe.html',
          controller:  'mvLoggswipeCtrl',
          controllerAs: 'vm',
          resolve:     routeRoleChecks.admin
        })

    })
    .factory('mvLoggswipe', mvLoggswipe)
    .controller('mvLoggswipeCtrl', mvLoggswipeCtrl);

  return app;
});
