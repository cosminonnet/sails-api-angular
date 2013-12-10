'use strict';

angular.module('sailsApiAngularApp')
  .controller('MainCtrl', function ($scope, User) {
    $scope.users = User.query();
  });
