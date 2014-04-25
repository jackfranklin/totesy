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

    $scope.form = {};
    $scope.newTag = function() {
      if($scope.form.newTagValue) {
        TodoService.addTagToTodo($routeParams.id, $scope.form.newTagValue);
        $scope.form.newTagValue = "";
      }
    };

  });

};
