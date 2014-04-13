describe('CustomersIndexControllerSpec', function(){
  var scope, ctrl;

  beforeEach(module('MyApp'));

  beforeEach(module(function($provide) {
    $provide.value('$firebase', function() { return true; });
  }));

  beforeEach(inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));


  it('sets the scope state', function() {
    expect(scope.state).toEqual('all');
  });

  it('gets todos', function() {
    expect(scope.todos).toBeDefined();
  });
});
