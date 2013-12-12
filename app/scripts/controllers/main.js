'use strict';

angular.module('sailsApiAngularApp')
  .controller('MainCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.users = User.query();
  }]);
