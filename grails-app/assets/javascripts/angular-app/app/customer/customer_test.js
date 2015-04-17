'use strict';

describe('angularApp.app.customer module', function() {

    var scope, resource, routeParams, Customer;
    var customerCtrl;

    beforeEach(function () {
        module('angularApp.app');
        module('angularApp.app.newsletter');
        inject(function ($rootScope, $resource, $routeParams, $controller, $injector) {
            scope = $rootScope;
            resource = $resource;
            routeParams = $routeParams;
            Customer = $injector.get('Customer');
            customerCtrl = $controller('CustomerCtrl', {$scope: scope, $resource: resource, $routeParams: routeParams, Customer: Customer});
        });
    });
  describe('customer controller', function(){
    it('should initialize', function() {
      expect(customerCtrl).toBeDefined();
    });
  });
});