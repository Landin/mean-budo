define([], function () {

function mvSwipeCtrl($scope, $http){
    'use strict';
    $scope.message = {};
    $scope.call = function() {
        var data = { "number": $scope.number};
        $http.post('/api/swipe', data).success(function(data, status) {
            $scope.message = data;
        });
    };
};
    return mvSwipeCtrl;
});