'use strict';

angular.module('sailsApiAngularApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('features', {
            abstract: true,
            url: "/features",
            templateUrl: "views/features.html",
            controller: 'FeaturesCtrl',
            data: {
                breadcrumbClass: ''
            }
        })
        .state('features.list', {
            url: "",
            templateUrl: "views/features.list.html"
        })
        .state('features.create', {
            url: "/create",
            views: {
              '': {
                templateUrl: "views/features.edit.html"
              },
              'message@features': {
                template: 'Proposing A New Feature'
              }
            },
            data: {
                breadcrumbClass: 'create-feature'
            }
        })
        .state('features.list.detail', {
            url: '/view/{featureId:[a-fA-F0-9]{24}}',
            views: {
              '': {
                templateUrl: 'views/features.detail.html',
                controller: 'FeatureSelectedCtrl'
              },
              'message@features': {
                template: 'Viewing The Selected Feature'
              }
            },
            data: {
                breadcrumbClass: 'view-feature'
            }
        })
        .state('features.list.edit', {
            url: '/edit/{featureId:[a-fA-F0-9]{24}}',
            views: {
              '': {
                templateUrl: "views/features.edit.html",
                controller: 'FeatureSelectedCtrl'
              },
              'message@features': {
                template: 'Editing The Selected Feature'
              }
            },
            data: {
                breadcrumbClass: 'edit-feature'
            }
        });
  }])
  .controller('FeaturesCtrl', ['$rootScope', '$scope', '$state', '_', 'Feature', function ($rootScope, $scope, $state, _, Feature) {
    $scope.features = Feature.query();

    $scope.breadcrumbClass = $state.$current.data.breadcrumbClass;
    $rootScope.$on('$stateChangeStart', function(event, toState){
        $scope.breadcrumbClass = toState.data.breadcrumbClass;
    });

    $scope.deleteAllFeatures = function() {
      _.remove($scope.features, function(feature) {
        feature.$delete();
        return true;
      });
      $state.go('features.list');
    };

    $scope.save = function() {
      if (_.isUndefined(this.feature.id)) {
        new Feature(this.feature)
            .$save(function(feature) {
              $scope.features.push(feature);
              $state.transitionTo('features.list.detail', {featureId: feature.id});
            });
      } else {
        this.feature.$update();
        $state.transitionTo('features.list.detail', {featureId: this.feature.id});
      }
    };

    $scope.delete = function() {
      this.feature.$delete(function(feature) {
        _.remove($scope.features, {id: feature.id});
        $state.go('features.list');
      });
    };

  }])
  .controller('FeatureSelectedCtrl', ['$scope', '$stateParams', '_', function ($scope, $stateParams, _) {
    // Feature.query() returns an array containing a promise, so in order to use the values in the array, the promise
    // must be resolved (and calling .then(<f>) on an already resolved promise immediately runs the function <f>).
    $scope.features.$promise.then(function() {
      $scope.feature = _.findWhere($scope.features, {id: $stateParams.featureId});
    });
  }]);