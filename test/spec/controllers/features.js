'use strict';

describe('Controller: FeaturesCtrl', function () {

  // load the controller's module
  beforeEach(module('sailsApiAngularApp'));

  var FeaturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeaturesCtrl = $controller('FeaturesCtrl', {
      $scope: scope
    });
  }));

});
