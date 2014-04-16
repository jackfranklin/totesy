describe('CustomersIndexControllerSpec', function() {
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

    ctrl = $controller('IndexCtrl', {
      $scope: scope,
      TodoService: TodoServiceStub
    });
  }));


  it('sets the scope state', function() {
    expect(scope.state).toEqual('notDone');
  });

  it('gets todos', function() {
    expect(scope.todos).toBeDefined();
  });

  describe('ordering todos by date', function() {
    it('orders them by date in asc order', function() {
      var farAway = { due: '20-04-2018' };
      var closer = { due: '19-04-2016' };
      expect(scope.orderByDate(closer) < scope.orderByDate(farAway)).toBe(true);
    });

    it('gives no date todos a score of 9999999999', function() {
      expect(scope.orderByDate({})).toEqual(9999999999);
    });
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

  describe('marking todos as done', function() {
    it('gets the TODO by the ID', function() {
      spyOn(TodoServiceStub, '$child').and.callThrough();

      scope.markTodoAsDone(1234);
      expect(scope.todos.$child).toHaveBeenCalled();
    });
  });

});
