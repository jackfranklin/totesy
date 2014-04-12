require('traceur/bin/traceur-runtime');
var angular = require('angular');
require('angularfire-browserify')(angular);
require('angular-router-browserify')(angular);
var app = angular.module('MyApp', ['firebase', 'ngRoute']);

app.constant('FIREBASE_URL', 'foo.com');
app.run(($rootScope, $location) => {
  $rootScope.$on('$routeChangeSuccess', (ev, data) => {
    $rootScope.active = data.$$route.controller;
  });
});

require('./filters.js')(app);
require('./services.js')(app);
require('./routes.js')(app);
require('./directives.js')(app);
require('./controllers.js')(app);
