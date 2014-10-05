'use strict';

describe('Controller: NewpostCtrl', function () {

  beforeEach(module('newsFrontendApp'));

  var NewpostCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpostCtrl = $controller('NewpostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
