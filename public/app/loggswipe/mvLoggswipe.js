define([], function () {

'use strict';

//Articles service used for articles REST endpoint


function mvLoggswipe($resource) {
    return $resource('api/loggswipes/:loggswipeId', {
      loggswipeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
    return mvLoggswipe;
});