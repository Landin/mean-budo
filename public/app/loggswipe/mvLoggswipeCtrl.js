function mvLoggswipeCtrl($scope, $location, mvLoggswipe){
    'use strict';
    
    $scope.find = function() {
     mvLoggswipe.query(function(loggswipes) {
        $scope.loggswipes = loggswipes;
      });
    };
        // Create x2js instance with default config
    var x2js = new X2JS();
    var jsonObj = { 
         loggswipes : {
                    Rfid: 'success',
                    namn : { 
                        item : [ 'Fnamn', 'Enamn' ]
                    }
          }
    };
    var xmlAsStr = x2js.json2xml_str( jsonObj );
    return console.log(jsonObj);
};