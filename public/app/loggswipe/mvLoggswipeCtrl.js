define(['xml2json', 'uiBootstrap'], function () {

  function mvLoggswipeCtrl($scope, $location, mvLoggswipe) {
    'use strict';
    var vm = this;
    vm.currentPage = vm.pageChanged;
    vm.maxSize = 500;
    vm.itemsPerPage = 40;
    //  vm.bigTotalItems = 175;
//    vm.bigCurrentPage = 1;
    
    vm.pageChanged = function () {
      vm.currentPage = vm.currentPage;
      console.log('Page changed to: ' + vm.currentPage)
      console.log(vm.filteredLoggswipes)
      
      };
    
    mvLoggswipe.query(function (loggswipes) {
      vm.loggswipes = loggswipes;
      
      
//      vm.loggswipes.$promise.then(function () {
        vm.totalItems = vm.loggswipes.length;
        
        $scope.$watch('currentPage + itemsPerPage', function () {
          var begin = ((vm.currentPage -1) * vm.itemsPerPage),
            end = begin + vm.itemsPerPage;
          console.log(begin)
          console.log(end)
          console.log(vm.totalItems)

          vm.filteredLoggswipes = vm.loggswipes.slice(begin, end);
          console.log(vm.filteredLoggswipes)
        });
      return vm.filteredLoggswipes;

      //      xml(loggswipes);
    });

    // Funktion för att ladda ner Loggswipes till hårdisk. 
    vm.getloggswipe = function () {
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

  //      $state.get().forEach(function (state) {
  //        console.log(state.name);
  //          })

  return mvLoggswipeCtrl;
});