'use strict';

describe('Controller: PostpageCtrl', function () {

  beforeEach(module('newsFrontendApp'));

  var PostpageCtrl,
    scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostpageCtrl = $controller('PostpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
