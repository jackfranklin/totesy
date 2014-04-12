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
    $scope.newTodo = function() {
      tidyTodo($scope.todo);
      TodoService.$add($scope.todo).then(function() {
        $scope.showAlert = true;
        $timeout(function() {
          $scope.showAlert = false;
        }, 5000);
        $scope.todo = {};
      });
    };
  });
};

function tidyTodo(todo) {
  if(todo.references) {
    todo.references = todo.references.split('\n');
  } else {
    todo.references = [];
  }
  if(todo.tags) {
    todo.tags = todo.tags.split(',');
  } else {
    todo.tags = [];
  }

  if(todo.due) {
    var [days, month, year] = todo.due.split('/');
    //todo: don't hardcode 2014
    if(!year) { year = '14'; }
    if(year.length > 2) { year = year.substring(0, 2); }
    var date = `${days}-${month}-${year}`;
    todo.due = date;
  }
}
