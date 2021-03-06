var moment = require('moment');

module.exports = function(app) {
  app.filter('dueSoon', () => {
    return (input) => {
      if(!input) return false;
      var now = moment().format("DD-MM-YY");
      //TODO doesn't work with things in the next month
      var [dueDay, dueMonth, dueYear] = input.split("-");
      var [nowDay, nowMonth, nowYear] = now.split("-");
      return nowYear === dueYear && nowMonth === dueMonth
          && (dueDay - nowDay) < 4 && (dueDay - nowDay) > 0;
    };
  });
};
