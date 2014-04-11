var angular = require('angular');
require('angularfire-browserify')(angular);
var myApp = angular.module("MyApp", ["firebase"]);

myApp.controller('IndexCtrl', function($scope) {
  $scope.foo = 'Hello moto';
});

