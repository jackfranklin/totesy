module.exports = function(app) {
  app.controller('NewTodoCtrl', function($scope, $timeout, TodoService) {
    $scope.todos = TodoService;
    getTags($scope);
    $scope.showAlert = false;
    $scope.alertText = "Todo saved";
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

function getTags($scope) {
  $scope.todos.$on('loaded', function() {
    $scope.tags = {};
    var keys = $scope.todos.$getIndex();

    keys.forEach(k => {
      var child = $scope.todos.$child(k);
      child.$on('loaded', function() {
        var tags = child.tags;
        if(tags) {
          tags.forEach(t => {
            $scope.tags[t] = $scope.tags[t] || 0;
            $scope.tags[t]++;
          });
        }
        $scope.$digest();
      });
    });
  });
}
