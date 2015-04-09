'use strict';

angular.module('nga.newsletter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsletter', {
            templateUrl: 'newsletter/newsletter.html',
            controller: 'NewsletterCtrl'
        });
    }])

    .factory('Newsletter', ['$resource', function ($resource) {
        $resource('api/etc/newsletter/kunden')

    }])

    .controller('NewsletterCtrl', ['Newsletter', function (Newsletter) {

    }]);