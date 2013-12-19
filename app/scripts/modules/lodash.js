
(function(window, angular, undefined) {

  'use strict';

  angular.module('lodash', [])
    .factory('_', function() {

      // Assumes lodash has already been loaded on the page
      var _ = window._ || {};

      return _;
    });

})(window, window.angular);
