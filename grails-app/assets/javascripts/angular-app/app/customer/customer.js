'use strict';

angular.module('angularApp.app.customer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/customer/show/:custId', {
            templateUrl: 'customer.htm',
            controller: 'CustomerCtrl'
        });
    }])

    .factory('Customer', ['$resource', function($resource) {
        return $resource('/api/customer/:custId', null,
            {
                'update': {method: 'PUT'}
            });
    }])

    .controller('CustomerCtrl', ['$resource', '$scope', '$routeParams', 'Customer', function ($resource, $scope, $routeParams, Customer) {
        $scope.customer = Customer.get({custId: $routeParams.custId});
        
        $scope.save = function () {
            Customer.update({custId: $scope.customer.id}, $scope.customer, function (response) {
                $scope.customer = response;
            })
        };

    }]);