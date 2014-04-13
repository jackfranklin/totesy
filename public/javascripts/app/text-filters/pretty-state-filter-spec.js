describe('prettyStateFilterSpec', function() {
  beforeEach(module('MyApp'));

  var filter;

  beforeEach(inject(function($injector) {
    filter = $injector.get('prettyStateFilter');
  }));

  it("should output the status nicely", function() {
    expect(filter('NOT_STARTED')).toBe('not started');
    expect(filter('STARTED')).toBe('started');
    expect(filter('BLOCKED')).toBe('blocked');
  });
});
