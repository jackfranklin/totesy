module.exports = function(app) {
  app.controller('IndexCtrl', function($scope, $firebase) {
    var todosRef = new Firebase("https://resplendent-fire-9225.firebaseio.com/todos");
    $scope.todos = $firebase(todosRef);

    $scope.todos.$add({
      name: 'Jack'
    });
  });
};
