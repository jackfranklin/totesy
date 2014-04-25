describe('TodoServiceSpec', function() {

  beforeEach(module('MyApp'));

  var spyFirebase = {
    firebase: function() { return {}; }
  };

  beforeEach(module(function($provide) {
    spyOn(spyFirebase, 'firebase').and.callThrough();
    $provide.value('$firebase', spyFirebase.firebase);
  }));

  beforeEach(inject(function($injector) {
    TodoService = $injector.get('TodoService');
  }));

  it('should construct a new $firebase', function() {
    expect(spyFirebase.firebase).toHaveBeenCalled();
  });

});
