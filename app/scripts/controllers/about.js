'use strict';

angular.module('sailsApiAngularApp')
  .controller('AboutCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.members = User.query();
  }]);
