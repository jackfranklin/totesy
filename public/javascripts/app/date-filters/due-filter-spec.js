describe('dueSoonFilterSpec', function() {
  beforeEach(module('MyApp'));

  var filter;

  beforeEach(inject(function($injector) {
    filter = $injector.get('dueSoonFilter');
  }));

  it("should say date is due if it's less than 3 days", function() {
    var soon = moment().add('days', 2).format("DD-MM-YY");
    expect(filter(soon)).toBe(true);
  });


  it("should say date is not due if it's more than 3 days", function() {
    var soon = moment().add('days', 4).format("DD-MM-YY");
    expect(filter(soon)).toBe(false);
  });

  it("should not be due soon if it's due today", function() {
    var soon = moment().format("DD-MM-YY");
    expect(filter(soon)).toBe(false);
  });

});
