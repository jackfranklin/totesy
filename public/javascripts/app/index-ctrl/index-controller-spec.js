describe('CustomersIndexControllerSpec', function(){
  var scope, ctrl;

  beforeEach(module('MyApp'));

  beforeEach(angular.mock.inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));


  it('sets the scope state', function() {
    expect(scope.state).toEqual('all');
  });
});
