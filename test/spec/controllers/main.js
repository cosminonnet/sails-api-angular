'use strict';

describe('Controller: MainCtrl', function () {

  // Load the controller's module
  beforeEach(module('sailsApiAngularApp'));

  // Define the variables
  var MainCtrl,
      scope,
      httpBackend,
      userData = [
        { "name": "John", "id": 1 },
        { "name": "Terry", "id": 2 }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    httpBackend = _$httpBackend_;
    httpBackend.expectGET('/api/user').respond(userData);
  }));

  // Tests descriptions
  it('should attach a list of users to the scope', function () {
    httpBackend.flush();
    expect(scope.users.length).toBe(userData.length);
  });

});
