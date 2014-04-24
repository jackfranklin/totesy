module.exports = function(app) {
  require('./index-ctrl')(app);
  require('./new-todo-ctrl')(app);
  require('./view-todo-ctrl')(app);
};
