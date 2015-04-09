'use strict';

// nga = newsletter-grails-angular
angular.module('nga', [
  'ngRoute',
  'nga.view1',
  'nga.view2',
  'nga.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
