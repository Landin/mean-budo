'use strict';

//Articles service used for articles REST endpoint
angular.module('app').factory('Cards', ['$resource',
  function($resource) {
    return $resource('rfid/cards/:cardId', {
      cardId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);