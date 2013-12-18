'use strict';

angular.module('sailsApiAngularApp')
  .service('User', ['$resource', function($resource){
    return $resource('/api/user/:userId', {userId:'@id'}, {
      'get'   : {method:'GET'},
      'query' : {method:'GET', isArray:true},
      'save'  : {method:'POST'},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    });
  }]);


