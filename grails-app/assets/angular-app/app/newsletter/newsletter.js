'use strict';

angular.module('nga.newsletter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsletter', {
            templateUrl: 'newsletter/newsletter.html',
            controller: 'NewsletterCtrl'
        });
    }])

    .factory('Recipients', ['$resource', function ($resource) {
        return $resource('api/etc/newsletter/kunden');

    }])

    .controller('NewsletterCtrl', ['$scope', 'Recipients', function ($scope, Recipients) {
        //$scope.recipients = Recipients.query(function (response) {});
        $scope.recipients = [
            {firstname: 'John', lastname: 'Doe', phone: 1233254, address: 'Somestreet, Someville 99', email: 'john.doe@doe.com'},
            {firstname: 'Max', lastname: 'Mustermann', phone: 999888777, address: 'Musterstrasse 3, Musterstadt', email: 'max.mustermann@mail.com'}
        ];

        $scope.markdownData = '#Title \n * list element 1 \n * list element 2 \n\n **This is bold**';
    }]);