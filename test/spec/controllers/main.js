'use strict';

describe('Controller: MainCtrl', function () {

  // Load the controller's module
  beforeEach(module('sailsApiAngularApp'));
  beforeEach(module('lodash'));

  // Define the variables
  var MainCtrl,
      scope,
      httpBackend,
      lodash,
      featuresData = [
        { "title": "Feature 1", "author": "John", "description": "", "id": 1 },
        { "title": "Feature 2", "author": "Mike", "description": "", "id": 2 },
        { "title": "Feature 3", "author": "Eric", "description": "", "id": 3 },
        { "title": "Feature 4", "author": "Paul", "description": "", "id": 4 }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, _) {
    scope = $rootScope.$new();
    lodash = _;
    MainCtrl = $controller('MainCtrl', {
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
    expect(scope.numberOfFeatures).toBe(3);
  });

});
