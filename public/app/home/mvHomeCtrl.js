define(['xml2json'], function () {

  function mvHomeCtrl($scope) {

    $scope.courses = [
      { name: 'C#', featured: true, published: new Date('2014-01-01') },
      { name: 'Ruby', featured: true, published: new Date('2014-02-01') },
      { name: 'Python', featured: true, published: new Date('2014-03-01') }
    ]
    
    $scope.getcourses = function (){  
      //Create x2js instance with default config
      var x2js = new X2JS();
      var json = { courses : $scope.courses };
      var xmlDocStr = x2js.json2xml_str(json);
      var octet = "data:application/octet-stream,"
      var uriContent = octet + encodeURIComponent(xmlDocStr);
      location.href = (uriContent);
    }    
  }

  return mvHomeCtrl;
});