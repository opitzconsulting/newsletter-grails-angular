'use strict';

angular.module('nga.customer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('app/customer/:custId', {
            templateUrl: 'customer/customer.html',
            controller: 'CustomerCtrl'
        });
    }])

    .factory('Customer', ['$resource', function($resource) {
        $resource('/customer/:custId');
    }])

    .controller('CustomerCtrl', ['$resource', '$scope', function ($resource, $scope) {
        $scope.save = function () {

        };

        $scope.remove = function () {

        };
    }]);