module.exports = function(app) {
  app.factory('TodoService', function($firebase, FIREBASE_URL) {
    var todosRef = new Firebase(`${FIREBASE_URL}/todos`);
    var fbRef = $firebase(todosRef);
    fbRef.markTodoAsDone = function(todoId) {
      fbRef.$child(todoId).$update({ done: true });
    };

    fbRef.markTodoAsStarted = function(todoId) {
      fbRef.$child(todoId).$update({ state: 'STARTED' });
    };

    fbRef.addTagToTodo = function(todoId, tag) {
      var todo = fbRef.$child(todoId);
      todo.$on('loaded', () => {
        var tags = todo.tags || [];
        tags.push(tag);
        todo.$update({ tags: tags });
      });
    };
    return fbRef;
  });
};
