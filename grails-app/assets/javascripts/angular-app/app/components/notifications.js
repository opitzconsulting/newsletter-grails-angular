"use strict";

angular.module('angularApp.app.notifications', [])

    .service('notifications', ['$rootScope', '$timeout',
        function ($rootScope, $timeout) {
            var notifications = {
                'STICKY': [],
                'ROUTE_CURRENT': [],
                'ROUTE_NEXT': []
            };

            function addNotification(service, notificationsArray, message, type, details, refresh) {
                var notificationObj = {message: message, details: details};
                notificationObj.type = ((type === 'error' ? 'danger' : type) || 'info');
                if (refresh === undefined || refresh) {
                    removeForCurrentRoute();
                }
                notificationsArray.push(notificationObj);
                if (type === 'success') {
                    removeSuccessNotification(service);
                }
                return notificationObj;
            }

            function removeForCurrentRoute() {
                notifications.ROUTE_CURRENT.length = 0;
            }

            function removeSuccessNotification(service) {
                $timeout(function () {
                    angular.forEach(notifications.ROUTE_CURRENT, function (index) {
                        if (index.type === 'success') {
                            service.remove(index);
                        }
                    });
                }, 2500);
            }

            this.getCurrent = function () {
                return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
            };

            this.pushSticky = function (message, type, details, refresh) {
                return addNotification(this, notifications.STICKY, message, type, details, refresh);
            };

            this.pushForCurrentRoute = function (message, type, details, refresh) {
                return addNotification(this, notifications.ROUTE_CURRENT, message, type, details, refresh);
            };

            this.pushForNextRoute = function (message, type, details, refresh) {
                return addNotification(this, notifications.ROUTE_NEXT, message, type, details, refresh);
            };

            this.remove = function (notification) {
                angular.forEach(notifications, function (notificationsByType) {
                    var idx = notificationsByType.indexOf(notification);
                    if (idx > -1) {
                        notificationsByType.splice(idx, 1);
                    }
                });
            };

            this.removeForCurrentRoute = removeForCurrentRoute;

            this.removeAll = function () {
                angular.forEach(notifications, function (notificationsByType) {
                    notificationsByType.length = 0;
                });
            };

            $rootScope.$on('$routeChangeSuccess', function () {
                notifications.ROUTE_CURRENT.length = 0;
                notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
                notifications.ROUTE_NEXT.length = 0;
            });
        }])
;
