'use strict';

angular.module('angularApp.app.customer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/customer/:action/:custId?', {
            templateUrl: 'customer.htm',
            controller: 'CustomerCtrl'
        });
    }])

    .factory('Customer', ['$resource', function ($resource) {
        return $resource('/api/customer/:custId', null,
            {
                'update': {method: 'PUT'}
            });
    }])

    .controller('CustomerCtrl', ['$scope', '$resource', '$routeParams', 'Customer', 'notifications',
        function ($scope, $resource, $routeParams, Customer, notifications) {
            $scope.notifications = notifications;

            if ($routeParams.action === 'show') {
                $scope.customer = Customer.get({custId: $routeParams.custId});

                $scope.save = function () {
                    Customer.update({custId: $scope.customer.id}, $scope.customer, function (response) {
                        notifications.pushForCurrentRoute('Saved successfully!', 'success');
                        $scope.customer = response;
                    }, function (error) {
                        notifications.pushForCurrentRoute('An error occurred!', 'error');
                    })
                };
            }

            if($routeParams.action === 'create') {
                $scope.customer = undefined;
                $scope.save = function () {
                    Customer.save({custId: $scope.customer.id}, $scope.customer, function (response) {
                        notifications.pushForCurrentRoute('Created successfully!', 'success');
                        $scope.customer = response;
                    }, function (error) {
                        notifications.pushForCurrentRoute('An error occurred!', 'error');
                    })
                }
            }


            $scope.viewBack = function () {
                window.location = '/';
            };
        }]);
