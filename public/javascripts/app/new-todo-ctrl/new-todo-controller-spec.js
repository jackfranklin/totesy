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

  describe('tidyTodo', function() {
    it('splits references by line', function() {
      scope.todo = {
        references: 'foo\nbar'
      };
      scope.tidyTodo();
      expect(scope.todo.references[0]).toEqual('foo');
      expect(scope.todo.references[1]).toEqual('bar');
    });

    it('splits tags by comman and removes whitespace', function() {
      scope.todo = {
        tags: 'foo, bar,baz'
      };
      scope.tidyTodo();
      expect(scope.todo.tags[0]).toEqual('foo');
      expect(scope.todo.tags[1]).toEqual('bar');
      expect(scope.todo.tags[2]).toEqual('baz');
    });

    it('gives todos a default state of NOT_STARTED', function() {
      scope.todo = {};
      scope.tidyTodo();
      expect(scope.todo.state).toEqual('NOT_STARTED');
    });

    it('sets date year to 14 if not defined', function() {
      scope.todo = { due: '11/04' };
      scope.tidyTodo();
      expect(scope.todo.due).toEqual('11-04-14');
    });
  });
});
