module.exports = function(app) {
  app.controller('NewTodoCtrl', function(
    $rootScope, $scope, $timeout, TodoService, TagsService
  ) {
    $scope.todos = TodoService;
    TagsService.all().then(function(tags) {
      $scope.tags = tags;
    });
    $rootScope.showAlert = false;
    $rootScope.alertText = "Todo saved";
    $scope.tidyTodo = function() {
      if($scope.todo.references) {
        $scope.todo.references = $scope.todo.references.split('\n');
      } else {
        $scope.todo.references = [];
      }
      if($scope.todo.tags) {
        $scope.todo.tags = $scope.todo.tags.split(',').map(t => t.trim());
      } else {
        $scope.todo.tags = [];
      }

      $scope.todo.state = 'NOT_STARTED';

      if($scope.todo.due) {
        var [days, month, year] = $scope.todo.due.split('/');
        //todo: don't hardcode 2014
        if(!year) { year = '14'; }
        if(year.length > 2) { year = year.substring(2, 4); }
        var date = `${days}-${month}-${year}`;
        $scope.todo.due = date;
      }
    };

    $scope.newTodo = function() {
      $scope.tidyTodo();
      TodoService.$add($scope.todo).then(function() {
        $rootScope.showAlert = true;
        $timeout(function() {
          $rootScope.showAlert = false;
        }, 5000);
        $scope.todo = {};
      });
    };
  });
};

