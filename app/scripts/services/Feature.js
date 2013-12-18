'use strict';

angular.module('sailsApiAngularApp')
  .service('Feature', ['$resource', function Feature($resource) {
    return $resource('/api/feature/:featureId', {featureId:'@id'}, {
      'get'   : {method:'GET'},
      'query' : {method:'GET', isArray:true},
      'save'  : {method:'POST'},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);

