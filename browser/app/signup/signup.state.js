'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: '/browser/app/signup/signup.html',
    controller: function ($scope, AuthFactory) {

      $scope.submitSignUp = function (email, password) {
        AuthFactory.signup(email, password)
          .then(function () {
              // TBD
          });
      };

    }
  });
});
