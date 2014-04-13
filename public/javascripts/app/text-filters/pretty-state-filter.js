module.exports = function(app) {
  var lookup = {
    'NOT_STARTED': 'not started',
    'STARTED': 'started',
    'BLOCKED': 'blocked'
  };
  app.filter('prettyState', () => (input) => lookup[input]);

};

