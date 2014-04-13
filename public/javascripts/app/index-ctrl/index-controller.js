module.exports = function(app) {

  app.controller('IndexCtrl', function($scope,
                                       $firebase,
                                       TodoService,
                                       overdueFilter
                                      ) {
    $scope.todos = TodoService;

    $scope.state = 'all';

    $scope.filterByState = function(state) {
      return function(todo) {
        switch(state) {
          case 'all':
            return true;
          case 'overdue':
            return overdueFilter(todo.due);
        }
      };
    };
  });

};
