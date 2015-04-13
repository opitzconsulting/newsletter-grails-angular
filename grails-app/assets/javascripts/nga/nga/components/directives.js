"use strict";

angular.module('nga.directives', [])
    .directive('editButtons', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                templateUrl: 'components/templates/edit-buttons.html',
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
        }]);