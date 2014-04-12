module.exports = function(app) {
  app.controller('NewTodoCtrl', function($scope, TodoService) {
    $scope.newTodo = function() {
      console.log('called');
      console.log($scope.todo);

      tidyTodo($scope.todo);
      console.log($scope.todo);
      TodoService.$add($scope.todo).then(function() {
        console.log('todo saved');
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
