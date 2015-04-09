'use strict';

// nga = newsletter-grails-angular
angular.module('nga', [
  'ngRoute',
  'nga.customer',
  'nga.newsletter',
  'nga.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/newsletter'});
}]);
