module.exports = function(app) {
  require('./date-filters/')(app);
  require('./text-filters/')(app);
};
