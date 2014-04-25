describe('dueTodayFilterSpec', function() {
  beforeEach(module('MyApp'));

  var filter;

  beforeEach(inject(function($injector) {
    filter = $injector.get('dueTodayFilter');
  }));

  it('be true if date is today', function() {
    var now = moment().format('DD-MM-YY');
    expect(filter(now)).toBe(true);
  });

  it('should be false if day is not today', function() {
    var soon = moment().add('days', 1).format("DD-MM-YY");
    expect(filter(soon)).toBe(false);
  });

  it('should be false if day is next year', function() {
    var agesYet = moment().add('years', 2).format('DD-MM-YY');
    expect(filter(agesYet)).toBe(false);
  });

  it('should be false if it is overdue', function() {
    var overDue = moment().subtract('days', 4).format('DD-MM-YY');
    expect(filter(overDue)).toBe(false);
  });
});
