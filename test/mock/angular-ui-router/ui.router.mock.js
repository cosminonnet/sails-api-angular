/*
Inspired from : https://github.com/angular-ui/ui-router/issues/212
*/

(function(window, angular, undefined) {

    'use strict';

    // FIXME
    angular.module('ui.router.mock', [])
      .service('$state', function() { return {} })
      .service('$stateParams', function() { return {} });

})(window, window.angular);