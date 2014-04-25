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
    $scope.item = $scope.todos.$child($routeParams.id);

    $scope.markTodoAsDone = function(todoId) {
      TodoService.markTodoAsDone(todoId);
    };


    $scope.markTodoAsStarted = function(todoId) {
      TodoService.markTodoAsStarted(todoId);
    };

  });

};
