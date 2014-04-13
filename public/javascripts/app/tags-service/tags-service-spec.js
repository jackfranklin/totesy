describe('TagsServiceSpec', function() {
  beforeEach(module('MyApp'));

  var TodoServiceStub = {
    $on: function(evt, cb) {
      cb();
    },
    $getIndex: function() { return [1]; },
    $child: function() {
      return {
        $on: function(evt, cb) { cb(); },
        tags: ['foo']
      };
    }
  };

  beforeEach(module(function($provide) {
    $provide.value('TodoService', TodoServiceStub);
  }));

  var $rootScope;
  beforeEach(inject(function($injector) {
    TagsService = $injector.get('TagsService');
    $rootScope = $injector.get('$rootScope');
  }));

  it('should get a count of tags', function(done) {
    var tags;
    TagsService.all().then(function(tags) {
      tags = tags;
      expect(tags.foo).toEqual(1);
      done();
    });
    $rootScope.$digest();
  });

});
