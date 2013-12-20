'use strict';

describe('Controller: AboutCtrl', function () {

  // Load the controller's module
  beforeEach(module('sailsApiAngularApp'));

  // Define the variables
  var AboutCtrl,
      scope,
      httpBackend,
      userData = [
        { "name": "John", "id": 1 },
        { "name": "Terry", "id": 2 }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });

    httpBackend = _$httpBackend_;
    httpBackend.whenGET('/api/user').respond(userData);
  }));

  // Tests descriptions
  it('should attach a list of members to the scope', function () {
    httpBackend.flush();
    expect(scope.members.length).toBe(userData.length);
  });

});
