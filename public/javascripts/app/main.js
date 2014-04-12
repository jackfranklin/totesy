require('traceur/bin/traceur-runtime');
var angular = require('angular');
require('angularfire-browserify')(angular);
require('angular-router-browserify')(angular);
var myApp = angular.module('MyApp', ['firebase', 'ngRoute']);

require('./services.js')(myApp);
require('./routes.js')(myApp);
require('./directives.js')(myApp);
require('./controllers.js')(myApp);
