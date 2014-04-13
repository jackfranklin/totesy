describe('overdueFilterSpec', function() {
  beforeEach(module('MyApp'));

  var filter;

  beforeEach(inject(function($injector) {
    filter = $injector.get('overdueFilter');
  }));

  it("should say date is overdue if in past", function() {
    var soon = moment().subtract('days', 2).format("DD-MM-YY");
    expect(filter(soon)).toBe(true);
  });


  it("should not say overdue is date is same day", function() {
    var soon = moment().format("DD-MM-YY");
    expect(filter(soon)).toBe(false);
  });

  it("should not say overdue is date is in future", function() {
    var soon = moment().add('days', 4).format("DD-MM-YY");
    expect(filter(soon)).toBe(false);
  });

});
