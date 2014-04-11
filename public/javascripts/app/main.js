var angular = require('angular');
require('angularfire-browserify')(angular);
require('angular-router-browserify')(angular);
var myApp = angular.module('MyApp', ['firebase', 'ngRoute']);

require('./routes.js')(myApp);
require('./index')(myApp);
