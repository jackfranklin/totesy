var moment = require('moment');

module.exports = function(app) {

  app.controller('ViewTodoCtrl', function($scope,
                                       $firebase,
                                       $routeParams,
                                       TodoService,
                                       overdueFilter,
                                       dueSoonFilter,
                                       dueTodayFilter
                                      ) {
    $scope.todos = TodoService;

    $scope.markTodoAsDone = function(todoId) {
      $scope.item.$update({ done: true });
    };

    $scope.item = $scope.todos.$child($routeParams.id);

    $scope.markTodoAsStarted = function(todoId) {
      $scope.item.$update({ state: 'STARTED' });
    };

  });

};
