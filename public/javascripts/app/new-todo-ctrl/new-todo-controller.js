module.exports = function(app) {
  app.controller('NewTodoCtrl', function($scope, $timeout, TodoService) {
    $scope.showAlert = true;
    $scope.alertText = "Todo saved";
    $scope.newTodo = function() {
      tidyTodo($scope.todo);
      TodoService.$add($scope.todo).then(function() {
        $scope.showAlert = true;
        $timeout(function() {
          $scope.showAlert = false;
        }, 2000);
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
}
