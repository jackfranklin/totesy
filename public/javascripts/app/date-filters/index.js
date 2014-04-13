module.exports = function(app) {
  require('./due-filter.js')(app);
  require('./overdue-filter.js')(app);
  require('./due-today-filter.js')(app);
};
