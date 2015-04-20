'use strict';

describe('angularApp.app.customer module', function () {

    var scope, resource, routeParams, Customer;
    var customerCtrl;

    beforeEach(function () {
        module('angularApp.app');
        module('angularApp.app.newsletter');
        inject(function ($rootScope, $resource, $routeParams, $controller, _Customer_) {
            scope = $rootScope;
            resource = $resource;
            routeParams = $routeParams;
            Customer = _Customer_;
            spyOn(_Customer_, 'update').andCallFake();
            customerCtrl = $controller('CustomerCtrl', {
                $scope: scope, $resource: resource, $routeParams: routeParams, Customer: Customer
            });
        });
    });

    describe('customer controller', function () {
        it('should initialize', function () {
            expect(customerCtrl).toBeDefined();
        });

        it('should load Customer', function () {
            expect(scope.customer).toBeDefined();
        });

        xit('should make an update on save', function () {
            scope.customer.id = 1;
            scope.save();
            expect(Customer.update).toHaveBeenCalledWith({custId: 1});
        });
    });
});