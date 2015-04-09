'use strict';

angular.module('nga.version', [
  'nga.version.interpolate-filter',
  'nga.version.version-directive'
])

.value('version', '0.1');
