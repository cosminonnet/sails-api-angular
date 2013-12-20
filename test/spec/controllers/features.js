'use strict';

describe('Controller: FeaturesCtrl', function () {

  // Load the controller's module
  beforeEach(module('sailsApiAngularApp'));
  beforeEach(module('lodash'));

  // Load the mock module
  beforeEach(module('ui.router.mock'));

  var FeaturesCtrl,
      scope,
      httpBackend,
      lodash,
      featuresData = [
          { "title": "Feature 1", "author": "John", "description": "", "id": 1 },
          { "title": "Feature 2", "author": "Mike", "description": "", "id": 2 }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $rootScope, $state, $controller, _) {
    scope = $rootScope.$new();
    lodash = _;
    FeaturesCtrl = $controller('FeaturesCtrl', {
      $scope: scope,
      _: lodash
    });

    httpBackend = _$httpBackend_;
    httpBackend.expectGET('/api/feature').respond(featuresData);
  }));

  // Tests descriptions
  it('should attach a list of features to the scope', function () {
    httpBackend.flush();
    expect(scope.features.length).toBe(featuresData.length);
  });

  it('should add a new feature to the list of features', function () {
    // TODO
  });

});
