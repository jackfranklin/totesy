module.exports = function(app) {
  app.filter('timeDuration', () => (input) => {
    var textOutput = function(num, unit) {
      var isPlural = num !== 1;
      return `${num} ${unit}${isPlural ? 's' : ''}`
    };

    if(input < 60) {
      return textOutput(input, 'minute');
    } else {
      var hourCount = 0;
      while(input >= 60) {
        hourCount++;
        input -= 60;
      }
      if(input >= 30) hourCount++;
      return textOutput(hourCount, 'hour');
    }
  });
};

