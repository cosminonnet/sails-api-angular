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
  .controller('FeaturesCtrl', ['$scope', '$state', 'Feature', function ($scope, $state, Feature) {
    $scope.features = Feature.query();

    $scope.deleteAllFeatures = function() {
      angular.forEach($scope.features, function(feature){
        feature.$delete();
      });
      $scope.features = [];
      $state.go('features.list');
    };

    $scope.save = function() {
      if (typeof this.feature.id === "undefined") {
        new Feature({
          title: this.feature.title,
          author: this.feature.author,
          description: this.feature.description
        })
        .$save(function(feature) {
          $scope.features.push(feature);
          $state.go('features.list');
        });
      } else {
          this.feature.$update(function(/*feature*/) {
            $scope.features = Feature.query();
            $state.go('features.list');
          });
      }
    };

    $scope.delete = function() {
      this.feature.$delete(function(/*feature*/) {
        $scope.features = Feature.query();
        $state.go('features.list');
      });
    };

  }])
  .controller('FeatureSelectedCtrl', ['$scope', '$stateParams', 'Feature', function ($scope, $stateParams, Feature) {
    $scope.feature = Feature.get({ id : $stateParams.featureId });
  }]);
