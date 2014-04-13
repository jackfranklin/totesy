var async = require('async');

module.exports = function(app) {
  app.factory('TagsService', function(TodoService, $q) {
    var TagsService = {};
    var todos = TodoService;
    TagsService.all = function() {
      var def = $q.defer();

      todos.$on('loaded', function() {
        var tagCount = {};
        var keys = todos.$getIndex();
        async.each(keys, (k, done) => {
          var child = todos.$child(k);
          child.$on('loaded', function() {
            var tags = child.tags;
            if(tags) {
              tags.forEach(t => {
                tagCount[t] = tagCount[t] || 0;
                tagCount[t]++;
              });
            }
            done();
          });
        }, (err) => {
          return def.resolve(tagCount);
        });
      });

      return def.promise;
    };

    return TagsService;
  });
};
