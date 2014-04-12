module.exports = function(app) {
  app.factory('TodoService', function($firebase) {
    var todosRef = new Firebase("https://resplendent-fire-9225.firebaseio.com/todos");
    return $firebase(todosRef);
  });
};
