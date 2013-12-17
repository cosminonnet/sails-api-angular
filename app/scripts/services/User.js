'use strict';

angular.module('sailsApiAngularApp')
  .service('User', ['$resource', function($resource){
    return $resource('/api/user/:userId', { userId : '@id' } );
  }]);


