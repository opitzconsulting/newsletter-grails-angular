'use strict';

describe('angularApp.app.newsletter module', function () {
    var scope, location, resource, route, Recipients, Newsletter;
    var newsletterCtrl;

    beforeEach(function () {
        module('angularApp.app');
        module('angularApp.app.newsletter');
        inject(function ($rootScope, $location, $resource, $route, $q, $controller) {
            var promiseMock = {
                get: function () {
                    var deferred = $q.defer();
                    return {$promise: deferred.promise};
                }
            };

            var RecipientsMock = angular.copy(promiseMock);
            spyOn(RecipientsMock, 'get').andCallFake(function () {
                scope.recipients = [];
            });

            var NewsletterMock = angular.copy(promiseMock);
            spyOn(NewsletterMock, 'get').andCallFake(function () {
                scope.markdown = '#Title';
            });

            scope = $rootScope;
            location = $location;
            resource = $resource;
            route = $route;
            Newsletter = NewsletterMock;
            Recipients = RecipientsMock;
            newsletterCtrl = $controller('NewsletterCtrl', {
                $scope: scope, Recipients: Recipients, Newsletter: Newsletter
            });
        });
    });

    describe('newsletter controller', function () {
        it('should initialize', function () {
            expect(newsletterCtrl).toBeDefined();
        });

        it('should have options for the editor', function () {
            expect(scope.editorOptions).toBeDefined();
        });

        it('should load all recipients', function () {
            expect(Recipients.get).toHaveBeenCalled();
            expect(scope.recipients).toBeDefined();
        });

        it('should load the markdown', function () {
            expect(Newsletter.get).toHaveBeenCalled();
            expect(scope.markdown).toBe('#Title');
        });
    });
});