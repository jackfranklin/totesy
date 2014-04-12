module.exports = function(app) {
  require('./todo-service/')(app);
  require('./tags-service/')(app);
};
