module.exports = function(app) {
  app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/javascripts/app/index/index-template.html',
      controller: 'IndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
};
