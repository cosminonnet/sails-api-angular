'use strict';

angular.module('sailsApiAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
  /*
  .factory('User', ['$resource', function($resource){
    return $resource('/user/:id', {id:'@id'});
  }]);
  */
