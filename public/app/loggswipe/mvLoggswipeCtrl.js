define(['uiBootstrap'], function () {

  function mvLoggswipeCtrl($scope, $location, mvLoggswipe, mvFilter) {
    'use strict';
    var vm = this;
    var allloggswipes;
    vm.currentPage = 1;
    vm.maxPageToShow = 5;
    vm.itemsPerPage = 10;
    getLoggswipe();

    function getLoggswipe() {
      mvLoggswipe.query(function (data) {
				allloggswipes = data;
        vm.pageChanged();
      });
    };
    
    vm.pageChanged = function () {
			var searchdata = mvFilter.sok(allloggswipes, vm.searchText);
      vm.totalItems = searchdata.length;
			vm.loggswipes = mvFilter.paginera(searchdata, vm.currentPage, vm.itemsPerPage);
    };

    vm.setPage = function (pageNum) {
      vm.currentPage = pageNum;
    };
    
    // Funktion för att ladda ner Loggswipes till hårdisk. 
    vm.downloadloggswipe = function () {
      //Create x2js instance with default config
      var x2js = new X2JS();
      var json = {
        loggswipes: allloggswipes
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
