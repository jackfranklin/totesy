describe('CustomersIndexControllerSpec', function() {
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

  describe('filtering todos', function() {
    it('filters out none by default', function() {
      var res = scope.filterByState('all')();
      expect(res).toBe(true);
    });

    it('shows only overdue if filtered', function() {
      var overdue = moment().subtract('days', 2).format("DD-MM-YY");
      var notOverdue = moment();
      expect(scope.filterByState('overdue')({
        due: overdue
      })).toBe(true);
      expect(scope.filterByState('overdue')({
        due: notOverdue
      })).toBe(false);
    });
  });

});
