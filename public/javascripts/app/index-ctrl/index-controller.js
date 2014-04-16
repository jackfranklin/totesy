var moment = require('moment');

module.exports = function(app) {

  app.controller('IndexCtrl', function($scope,
                                       $firebase,
                                       TodoService,
                                       overdueFilter,
                                       dueSoonFilter,
                                       dueTodayFilter
                                      ) {
    $scope.todos = TodoService;

    $scope.state = 'notDone';
    $scope.markTodoAsDone = function(todoId) {
      $scope.todos.$child(todoId).$update({ done: true });
    };

    $scope.orderByDate = function(todo) {
      // some unreasonably large timestamp
      // this is so bad I know
      if(!todo.due) return 9999999999;
      var date = moment(todo.due, "DD-MM-YY");
      return date.unix();
    };

    $scope.filterByState = function(state) {
      return function(todo) {
        switch(state) {
          case 'all':
            return true;
          case 'notDone':
            return !todo.done;
          case 'done':
            return todo.done === true;
          case 'overdue':
            return overdueFilter(todo.due);
          case 'duesoon':
            return dueSoonFilter(todo.due);
          case 'duetoday':
            return dueTodayFilter(todo.due);
        }
      };
    };
  });

};
