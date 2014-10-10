define(['xml2json'], function () { 

  function mvLoggswipeCtrl($location, mvLoggswipe){
    'use strict';
    var vm = this;

    vm.find = function() {
     mvLoggswipe.query(function(loggswipes) {
        vm.loggswipes = loggswipes;
  //      xml(loggswipes);
      });
    };
    
     vm.getloggswipe = function () {  
      //Create x2js instance with default config
      var x2js = new X2JS();
      var json = { loggswipes : vm.loggswipes };
      var xmlDocStr = x2js.json2xml_str(json);
      var filename = "nisse.xml";
      download(filename, xmlDocStr);
    }
     
    function download(filename, text) {
      var pom = document.createElement('a');
      var octet = 'data:text/plain;charset=utf-8,';
      pom.setAttribute('href', octet + encodeURIComponent(text));
      pom.setAttribute('download', filename);
      pom.click();
    } 
  }

  return mvLoggswipeCtrl;
});