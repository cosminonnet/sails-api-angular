'use strict';

angular.module('sailsApiAngularApp')
  .controller('MainCtrl', ['$scope', '_', 'Feature', function ($scope, _, Feature) {
    $scope.numberOfFeatures = 3;
    $scope.features = Feature.query(function(features) {
        $scope.numberOfFeatures = _.min([features.length, $scope.numberOfFeatures]);
    });
  }]);
