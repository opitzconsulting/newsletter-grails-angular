"use strict";


angular.module('angularApp.app.directives')

    .factory('User', ['$resource', function($resource) {
        return $resource('/api/loggedUser');
    }])

    .controller('UsernameCtrl', ['$scope', 'User', function($scope, User) {
        User.get({}, function (response) {
            $scope.username = response.username;
        });
    }]);
