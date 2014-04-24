describe('timeDurationFilterSpec', function() {
  beforeEach(module('MyApp'));

  var filter;

  beforeEach(inject(function($injector) {
    filter = $injector.get('timeDurationFilter');
  }));

  it('doesnt touch numbers less than 60 mins', function() {
    expect(filter(59)).toBe('59 minutes');
    expect(filter(2)).toBe('2 minutes');
  });

  it('pluralizes minute / minutes correctly', function() {
    expect(filter(1)).toBe('1 minute');
  });

  it('works for hours and rounds', function() {
    expect(filter(61)).toBe('1 hour');
    expect(filter(66)).toBe('1 hour');
    expect(filter(110)).toBe('2 hours');
    expect(filter(150)).toBe('3 hours');
  });
});
