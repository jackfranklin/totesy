module.exports = function(app) {
  app.factory('TodoService', function($firebase, FIREBASE_URL) {
    var todosRef = new Firebase(`${FIREBASE_URL}/todos`);
    return $firebase(todosRef);
  });
};
