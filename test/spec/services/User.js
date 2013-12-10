'use strict';

describe('Service: User', function () {

  // Load the service's module
  beforeEach(module('sailsApiAngularApp'));

  // Define the variables
  var User,
      httpBackend,
      userData = [
          { "name": "John", "id": 1 },
          { "name": "Terry", "id": 2 }
      ];

  // Instantiate the service
  beforeEach(inject(function (_User_, _$httpBackend_) {
    User = _User_;

    httpBackend = _$httpBackend_;
    httpBackend.expectGET('/api/user').respond(userData);
  }));

  // Tests descriptions
  it('should be created', function () {
    expect(!!User).toBe(true);
  });

  it('should get an empty list of users', function () {
    var users = User.query();
    expect(users.length).toBe(0);
  });

  it('should get a list of users', function () {
    var users = User.query();
    httpBackend.flush();
    expect(users.length).toBe(userData.length);
  });

});
