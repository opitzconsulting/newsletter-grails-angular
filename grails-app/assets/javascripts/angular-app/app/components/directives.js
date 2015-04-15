"use strict";

angular.module('angularApp.app.directives', [])
    .directive('editButtons', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                templateUrl: 'edit-buttons.htm',
                replace: true,
                transclude: true,
                scope: true,
                link: function ($scope) {
                    if (!$scope.viewBack) {
                        $scope.viewBack = function () {
                            $window.history.back();
                        };
                    }
                }
            };
        }])

    .directive('username', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                templateUrl: 'username.htm',
                replace: true,
                transclude: true,
                controller: 'UsernameCtrl'
            };
        }])

;