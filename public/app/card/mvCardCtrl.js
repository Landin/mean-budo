define([], function () {

function mvCardCtrl($scope, $location, mvCard){
    'use strict';
    
    $scope.find = function() {
     mvCard.query(function(cards) {
        $scope.cards = cards;
      });
    };

    $scope.clearNew = function() {
        $scope.newcard = {};
    };
    
    $scope.add = function() {       
        //if (isValid) {
        var card = new mvCard({
          rfid:  $scope.newcard.rfid,
          fnamn: $scope.newcard.fnamn,
          enamn: $scope.newcard.enamn,
          email: $scope.newcard.email
        });
        
        card.$save(function(response) {
            $scope.cards.push(card);
            $scope.clearNew();
        });
//      } else {
//        $scope.submitted = true;
//      }
    };

    $scope.remove = function(card) {
      if (card) {
        card.$remove();

        for (var i in $scope.cards) {
          if ($scope.cards[i] === card) {
            $scope.cards.splice(i, 1);
          }
        }
      } else {
        $scope.card.$remove(function(response) {
          $location.path('/api/cards');
        });
      }
    };
  }
    return mvCardCtrl;
});