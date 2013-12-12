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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/features', {
        templateUrl: 'views/features.html'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html'
      })
      .when('/pricing', {
        templateUrl: 'views/pricing.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);