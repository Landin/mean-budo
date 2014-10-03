function mvLoggswipeCtrl($scope, $location, mvLoggswipe){
    'use strict';
    
    $scope.find = function() {
     mvLoggswipe.query(function(loggswipes) {
        $scope.loggswipes = loggswipes;
      });
    };
};