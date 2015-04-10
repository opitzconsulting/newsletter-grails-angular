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
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/newsletter'});
    }])
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }])
    ;
