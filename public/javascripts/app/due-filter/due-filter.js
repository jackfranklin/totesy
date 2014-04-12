var moment = require('moment');

module.exports = function(app) {
  app.filter('dueSoon', () => {
    return (input) => {
      if(!input) return false;
      var date = moment(input, "DD-MM-YY");
      var now = moment();
      var diff = date.diff(now, 'days');
      console.log(input,diff);
      return diff < 3;
    };
  });
};
