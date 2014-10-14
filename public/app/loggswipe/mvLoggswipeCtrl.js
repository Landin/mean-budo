define(['xml2json', 'uiBootstrap'], function () {

  function mvLoggswipeCtrl($scope, $location, mvLoggswipe) {
    'use strict';
    var vm = this;
    vm.currentPage = 1;
    vm.maxPageToShow = 5;
    vm.itemsPerPage = 10;
    getLoggswipe();

    vm.pageChanged = function () {
      var begin = ((vm.currentPage - 1) * vm.itemsPerPage);
      var end = begin + vm.itemsPerPage;
      vm.filtloggswipes = vm.loggswipes.slice(begin, end)
      
    };

    function getLoggswipe() {
      mvLoggswipe.query(function (loggswipes) {
        vm.loggswipes = loggswipes;
        vm.totalItems = vm.loggswipes.length;
        vm.pageChanged();
        
      });
    };
    
    vm.setPage = function (pageNum) {
      vm.currentPage = pageNum;
    };
    
    // Funktion för att ladda ner Loggswipes till hårdisk. 
    vm.downloadloggswipe = function () {
      //Create x2js instance with default config
      var x2js = new X2JS();
      var json = {
        loggswipes: vm.loggswipes
      };
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
  };

  // Funktion för att trigga Skrivaren för att skriva ut DOM

  return mvLoggswipeCtrl;
});