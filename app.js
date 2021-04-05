(function () {
'use strict';

//Protecting Dependency Injection from Minification

//Explicitly mentioning function arguments
// angular.module('DIApp', []).controller('DIController',['$scope', '$filter', DIController]);
//
// function DIController($scope, $filter){
//   $scope.name = "AngularJS";
//
//   $scope.upper = function(){
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }

//Using Inline function
// angular.module('DIApp', []).controller('DIController', ['$scope', '$filter', function($scope, $filter){
//   $scope.name = "AngularJS";
//
//   $scope.upper = function(){
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }]);

//Adding an extra property to controller function value
angular.module('DIApp', []).controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];

function DIController($scope, $filter){
  $scope.name = "AngularJS";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
