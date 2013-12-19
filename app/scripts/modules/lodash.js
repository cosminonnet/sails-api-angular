
(function(window, angular, undefined) {

  'use strict';

  angular.module('lodash', [])
    .factory('_', function() {

      // Assumes underscore has already been loaded on the page
      var _ = window._ || {};

      // Remove the first object containing specific `key:value` pairs.
      // The operation is in-place and it alters the existing <collection>.
      _.removeFirst = function(collection, properties) {
          var n = collection.length, item, i;

          for (i=0; i<n; i++)  {
            item = collection[i];

            if (item.id === properties.id) {
              collection.splice(i, 1);
              break;
            }
          }
      };

      return _;
    });

})(window, window.angular);
