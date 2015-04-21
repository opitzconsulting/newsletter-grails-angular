'use strict';

angular.module('angularApp.app', [
    'ngRoute',
    'ngResource',
    'angularApp.app.customer',
    'angularApp.app.newsletter',
    'angularApp.app.directives',
    'angularApp.app.notifications',
    'ui.markdown'
    ])

    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/customer'});
    }])
;
