module.exports = function(app) {
  app.controller('IndexCtrl', function($scope,
                                       $firebase,
                                       TodoService
                                      ) {
    $scope.todos = TodoService;
  });
};
