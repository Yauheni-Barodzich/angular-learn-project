'use strict';

describe('Directive: newPost', function () {

  beforeEach(module('newsFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-post-popup></new-post-popup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newPost');
  }));
});
