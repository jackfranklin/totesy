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
        $rootScope.showAlert = true;
        $timeout(function() {
          $rootScope.showAlert = false;
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

  todo.state = 'NOT_STARTED';

  if(todo.due) {
    var [days, month, year] = todo.due.split('/');
    //todo: don't hardcode 2014
    if(!year) { year = '14'; }
    if(year.length > 2) { year = year.substring(2, 4); }
    var date = `${days}-${month}-${year}`;
    todo.due = date;
  }
}
