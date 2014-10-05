'use strict';

describe('Directive: Post', function () {
  beforeEach(module('newsFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should visible', inject(function ($compile) {
    element = angular.element('<post-short></post-short>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the postShort directive');
  }));
});
