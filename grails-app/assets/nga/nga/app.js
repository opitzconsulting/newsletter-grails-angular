'use strict';

// nga = newsletter-grails-angular
angular.module('nga', [
    'ngRoute',
    'ngResource',
    'nga.customer',
    'nga.newsletter',
    'nga.directives',
    'ui.markdown'
])

    .run(['$rootScope', '$location', '$templateCache', function ($rootScope, $location, $templateCache) {
        $rootScope.$on('$routeChangeStart', function() {
            console.log("PFAD: ", $location.path());
            console.log("Template: ", $templateCache.get('customer_template.htm'));
        })
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/newsletter'});
    }])

    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }])
    ;
