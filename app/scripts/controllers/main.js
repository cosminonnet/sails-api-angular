'use strict';

angular.module('sailsApiAngularApp')
  .controller('MainCtrl', function ($scope/*, User*/) {
    //$scope.users = User.query();
    $scope.users= [
      {
        "name": "John",
        "createdAt": "2013-12-09T08:19:04.421Z",
        "updatedAt": "2013-12-09T08:19:04.421Z",
        "id": 1
      },
      {
        "name": "Terry",
        "createdAt": "2013-12-09T08:19:07.930Z",
        "updatedAt": "2013-12-09T08:19:07.930Z",
        "id": 2
      }
    ];
  });
