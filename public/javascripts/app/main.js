require('traceur/bin/traceur-runtime');

var app = angular.module('MyApp', ['firebase', 'ngRoute']);

app.constant('FIREBASE_URL', '!firebase_url!');
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
