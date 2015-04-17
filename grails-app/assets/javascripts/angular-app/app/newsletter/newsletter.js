'use strict';

angular.module('angularApp.app.newsletter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsletter', {
            templateUrl: 'newsletter.htm',
            controller: 'NewsletterCtrl'
        });
    }])

    .factory('Recipients', ['$resource', function ($resource) {
        return $resource('api/recipients');
    }])

    .factory('Newsletter', ['$resource', function ($resource) {
        return $resource('api/markdown/:markId');
    }])

    .controller('NewsletterCtrl', ['$scope', 'Recipients', 'Newsletter', function ($scope, Recipients, Newsletter) {
        Recipients.get(function (response) {
            $scope.recipients = response.customers;
        });
        $scope.markdownData = '#Loading data...';
        Newsletter.get({markId: 1}, function (response) {
            $scope.markdownData = response.markdown;
        }, function(error) {
            $scope.markdownData = '#Error occured.';
        });
        $scope.editorOptions = {
            lineNumbers: false
        };
    }]);