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
      ],
      newFeature = { "title": "Feature 3", "author": "Eric", "description": "" };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $rootScope, $state, $controller, _) {
    scope = $rootScope.$new();
    lodash = _;
    FeaturesCtrl = $controller('FeaturesCtrl', {
      $scope: scope,
      _: lodash
    });

    httpBackend = _$httpBackend_;
    httpBackend.whenGET('/api/feature').respond(featuresData);
    httpBackend.whenPOST('/api/feature').respond(function(method, url, data) {
      // Set an id to the <data> object
      data = angular.fromJson(data);
      data = angular.toJson(_.assign(data, { "id": (scope.features.length + 1) }));

      // The array returned is a response status of 200, an response
      // body containing the <feature> and an empty set of headers
      return [200, data, {}];
    });
  }));

  // Tests descriptions
  it('should attach a list of features to the scope', function () {
    httpBackend.flush();
    expect(scope.features.length).toBe(featuresData.length);
  });

  it('should add a new feature to the list of features', function () {
    scope.feature = newFeature;
    scope.save();
    httpBackend.flush();
    expect(scope.features.length).toBe(featuresData.length + 1);
  });

});
