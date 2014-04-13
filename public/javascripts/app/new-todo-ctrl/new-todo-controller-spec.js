describe('NewTodoControllerSpec', function() {
  beforeEach(module('MyApp'));


  var ctrl, scope, rootScope;

  var TagsServiceStub = {
    all: function() {
      return { then: function(cb) { cb(); } };
    }
  };

  var TodoServiceStub = {
    $add: function() {
      return {
        then: function(cb) { cb(); }
      };
    }
  };

  beforeEach(inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;

    ctrl = $controller('NewTodoCtrl', {
      $scope: scope,
      TagsService: TagsServiceStub,
      TodoService: TodoServiceStub
    });
  }));

  it('sets up the notification on the $rootScope', function() {
    expect(rootScope.showAlert).toEqual(false);
  });

  it('gets todos', function() {
    expect(scope.todos).toBeDefined();
  });

  it('shows the notification bar when a todo is added', function() {
    scope.todo = {};
    scope.newTodo();
    expect(rootScope.showAlert).toEqual(true);
  });

  it('hides the notification bar after 5 seconds', function() {
    scope.todo = {};
    scope.newTodo();
    setTimeout(function() {
      expect(rootScope.showAlert).toEqual(false);
    }, 5200);
  });
});
