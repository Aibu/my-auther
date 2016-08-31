'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/browser/app/login/login.html',
    controller: function ($scope, AuthFactory) {

      $scope.submitLogin = function (email, password) {
        console.log(email);
        AuthFactory.login(email, password)
          .then(function () {
              // TBD
          });
      };

    }
  });
});
