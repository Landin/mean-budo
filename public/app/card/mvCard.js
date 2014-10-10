define([], function () {

'use strict';

//Articles service used for articles REST endpoint

function mvCard($resource) {
    return $resource('api/cards/:cardId', {
      cardId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
}
    return mvCard;
});