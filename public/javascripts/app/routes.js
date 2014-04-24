module.exports = function(app) {
  app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/javascripts/app/index-ctrl/index-template.html',
      controller: 'IndexCtrl'
    })
    .when('/new', {
      templateUrl: '/javascripts/app/new-todo-ctrl/new-todo-template.html',
      controller: 'NewTodoCtrl'
    })
    .when('/todo/:id', {
      templateUrl: '/javascripts/app/view-todo-ctrl/view-todo-template.html',
      controller: 'ViewTodoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
};
