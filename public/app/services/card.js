'use strict';

//Articles service used for articles REST endpoint

var mvCard = function($resource) {
    return $resource('api/cards/:cardId', {
      cardId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
}