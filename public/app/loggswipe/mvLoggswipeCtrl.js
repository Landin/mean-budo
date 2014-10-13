define(['xml2json', 'uiBootstrap'], function () { 

  function mvLoggswipeCtrl($location, mvLoggswipe){
    'use strict';
    var vm = this;

    vm.find = function() {
     mvLoggswipe.query(function(loggswipes) {
        vm.loggswipes = loggswipes;
  //      xml(loggswipes);
      });
    };
    
    // Funktion för att ladda ner Loggswipes till hårdisk. 
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
    
    // Pagination för att dela upp LoggSwipe till flera sidor.
    vm.loggpage = function () {
      vm.totalItems = 10;
      vm.currentPage = 4;

      vm.setPage = function (pageNo) {
        vm.currentPage = pageNo;
      };

      vm.pageChanged = function() {
        console.log('Page changed to: ' + vm.currentPage);
      };

      vm.maxSize = 5;
      vm.bigTotalItems = 175;
      vm.bigCurrentPage = 1;
    }
    
    // Funktion för att trigga Skrivaren för att skriva ut DOM
  }
      $state.get().forEach(function (state) {
        console.log(state.name);
          })

  return mvLoggswipeCtrl;
});