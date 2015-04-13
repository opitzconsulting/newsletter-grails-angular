'use strict';

angular.module('nga.newsletter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsletter', {
            templateUrl: 'newsletter.htm',
            controller: 'NewsletterCtrl'
        });
    }])

    .factory('Recipients', ['$resource', function ($resource) {
        return $resource('api/recipients');

    }])

    .controller('NewsletterCtrl', ['$scope', 'Recipients', function ($scope, Recipients) {
        Recipients.get(function (response) {
            $scope.recipients = response.customers;
        });


        //TODO load Markdown-newsletter
        $scope.markdownData = '#Title \n * list element 1 \n * list element 2 \n\n **This is bold**';
    }]);