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

    .controller('NewsletterCtrl', ['$scope', 'Recipients', function ($scope, Recipients) {
        Recipients.get(function (response) {
            $scope.recipients = response.customers;
        });

        //TODO load Markdown-newsletter
        $scope.markdownData = '#Newsletter \n' +
        ' * list element 1 \n' +
        ' * list element 2 \n\n' +
        '``This is a code block.``\n\n' +
        '> A blockquote \n\n' +
        ' **This is bold**';
        $scope.editorOptions = {
            lineNumbers: false
        };

    }]);