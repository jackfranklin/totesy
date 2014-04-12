var moment = require('moment');

module.exports = function(app) {
  app.filter('overdue', () => {
    return (input) => {
      if(!input) return false;
      var date = moment(input, "DD-MM-YY");
      var diff = date.diff(moment(), 'days');
      return diff < 0;
    };
  });
};
