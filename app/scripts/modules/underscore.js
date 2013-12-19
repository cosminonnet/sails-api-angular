'use strict';

angular.module('underscore', [])
  .factory('_', function() {
    // Assumes underscore has already been loaded on the page
    return window._;
  });