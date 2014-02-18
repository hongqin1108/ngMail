app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);