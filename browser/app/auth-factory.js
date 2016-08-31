app.factory('AuthFactory', function ($http) {

    return {
        login: function (email, password) {
            return $http.post('/login', { email: email, password: password })
                .then(function (response) {
                    return response.data;
                });
        },
        signup: function (email, password) {
            return $http.post('/signup', { email: email, password: password })
                .then(function (response) {
                    return response.data;
                });
        },
        logout: function () {
            return $http.get('/logout')
                .then(function (response) {
                    return response.data;
                });
        }
    };

});