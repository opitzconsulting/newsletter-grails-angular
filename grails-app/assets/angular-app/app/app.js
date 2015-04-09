'use strict';

// nga = newsletter-grails-angular
angular.module('nga', [
  'ngRoute',
  'ngResource',
  'nga.customer',
  'nga.newsletter',
  'nga.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/newsletter'});
}]);
