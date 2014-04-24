module.exports = function(app) {
  require('./pretty-state-filter.js')(app);
  require('./time-filter.js')(app);
};
