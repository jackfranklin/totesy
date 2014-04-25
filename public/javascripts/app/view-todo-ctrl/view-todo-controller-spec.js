describe('ViewTodoControllerSpec', function() {
  var scope, ctrl;

  beforeEach(module('MyApp'));

  beforeEach(module(function($provide) {
    $provide.value('$firebase', function() { return true; });
  }));

  var TodoServiceStub = {
    $child: function(id) {
      return {
        $update: function() {}
      };
    }
  };

  beforeEach(inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = controller('ViewTodoCtrl', {
      $scope: scope,
      TodoService: TodoServiceStub
    });
  }));

});
