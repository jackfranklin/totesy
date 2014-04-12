module.exports = function(app) {
  app.directive('topNotification', function() {
    return {
      restrict: 'E',
      scope: {
        show: '=',
        content: '='
      },
      templateUrl: '/javascripts/app/top-notification-directive/top-notification-directive-template.html'
    };
  });
};
