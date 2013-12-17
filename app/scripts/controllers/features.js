'use strict';

angular.module('sailsApiAngularApp')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
    $stateProvider
        .state('features', {
            abstract: true,
            templateUrl: "views/features.html",
            controller: 'FeaturesCtrl'
        })
        .state('features.list', {
            url: "/features",
            templateUrl: "views/features.list.html"
        })
        .state('features.create', {
            url: "/features/create",
            templateUrl: "views/features.edit.html"
        })
        .state('features.list.detail', {
            url: '/view/{featureId:[0-9]{1,4}}',
            templateUrl: "views/features.detail.html",
            controller: 'FeatureSelectedCtrl'
        })
        .state('features.list.edit', {
            url: '/edit/{featureId:[0-9]{1,4}}',
            templateUrl: "views/features.edit.html",
            controller: 'FeatureSelectedCtrl'
        });
  }])
  .controller('FeaturesCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.features = [];

    $scope.deleteAllFeatures = function() {
      $scope.features = [];
      $state.go('features.list');
    };

    $scope.save = function() {
      if (typeof this.feature.id == "undefined") {
        $scope.features.push({
          title: this.feature.title,
          author: this.feature.author,
          description: this.feature.description,
          id: $scope.features.length
        });
      }
      $state.go('features.list');
    };

  }])
  .controller('FeatureSelectedCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.feature = $scope.features[$stateParams.featureId];
  }]);
