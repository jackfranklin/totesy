module.exports = function(app) {
  app.controller('IndexCtrl', function($scope,
                                       $firebase,
                                       TodoService,
                                       FIREBASE_URL) {
    $scope.todos = TodoService;
    console.log(FIREBASE_URL);
  });
};
