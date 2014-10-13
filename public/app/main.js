require.config({
  baseUrl: '/app',

  paths: {
    angular: '../vendor/angular/angular',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
    ngResource: '../vendor/angular-resource/angular-resource',
    uiBootstrap: '../vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    jquery : '../vendor/jquery/dist/jquery.min',
    toastr: '../vendor/toastr/toastr.min',
    uiutils: '/vendor/ui-utils/ui-utils.min',
    xml2json: '../vendor/x2js/xml2json'

  },

  shim: {
    jquery: { exports: '$' },
    bootstrap: { deps: ['jquery'] },
    toastr: { exports: 'toastr' },
    angular: { deps: ['jquery'], exports: 'angular' },
    uiRouter: { deps: ['angular'] },
    uiBootstrap: { deps: ['angular'] },
    uiutils: { deps: ['angular'] },
    ngResource: { deps: ['angular']},
    xml2json: {exports: 'X2JS'}

  },

  priority: [
    'uiRouter',
    'angular',
    'uiBootstrap',
    'app',
    'ngResource',
    'account/index'
  ]
});

// Kräv
require([
    'angular',
    'app',
    'ngResource',
    'core/core.module',
    'account/account.module',
    'home/home.module',
    'admin/admin.module',
//  MINA SIDOR!!
    'swipe/swipe.module',
    'loggswipe/loggswipe.module',
    'card/card.module',
    'test/test.module'
  ],

// Bootstrap
  function (angular) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });