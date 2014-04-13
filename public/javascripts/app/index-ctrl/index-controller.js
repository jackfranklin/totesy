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

    $scope.state = 'all';

    $scope.orderByDate = function(todo) {
      if(!todo.due) return 0;
      var date = moment(todo.due, "DD-MM-YY");
      return date.unix();
    };

    $scope.filterByState = function(state) {
      return function(todo) {
        switch(state) {
          case 'all':
            return true;
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
