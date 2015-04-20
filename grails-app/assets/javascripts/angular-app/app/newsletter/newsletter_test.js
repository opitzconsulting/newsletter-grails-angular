'use strict';

describe('angularApp.app.newsletter module', function () {
    var scope, Recipients, Newsletter;
    var newsletterCtrl;

    beforeEach(function () {
        module('angularApp.app');
        module('angularApp.app.newsletter');
        inject(function ($rootScope, $controller, _Recipients_, _Newsletter_) {

            scope = $rootScope;

            Recipients = _Recipients_;
            spyOn(_Recipients_, 'get').andCallFake(function() {
                scope.recipients = [];
            });

            Newsletter = _Newsletter_;
            spyOn(_Newsletter_, 'get').andCallFake(function () {
                scope.markdown = '#Title';
            });

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