'use strict';

angular.module('angularApp.app', [
    'ngRoute',
    'ngResource',
    'angularApp.app.customer',
    'angularApp.app.newsletter',
    'angularApp.app.directives',
    'ui.markdown'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/newsletter'});
    }])

    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }])
    ;
