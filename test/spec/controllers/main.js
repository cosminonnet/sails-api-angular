'use strict';

describe('Controller: MainCtrl', function () {

  // Load the controller's module
  beforeEach(module('sailsApiAngularApp'));

  // Define the variables
  var MainCtrl,
      scope,
      httpBackend,
      featuresData = [
        { "title": "Feature 1", "author": "John", "description": "", "id": 1 },
        { "title": "Feature 2", "author": "Mike", "description": "", "id": 2 }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    httpBackend = _$httpBackend_;
    httpBackend.expectGET('/api/feature').respond(featuresData);
  }));

  // Tests descriptions
  it('should attach a list of features to the scope', function () {
    httpBackend.flush();
    expect(scope.features.length).toBe(featuresData.length);
  });

});
