'use strict';

angular.module('sailsApiAngularApp')
  .service('Feature', ['$resource', function Feature($resource) {
    return $resource('/api/feature/:featureId', { featureId : '@id' } );
  }]);

