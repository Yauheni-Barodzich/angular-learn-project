'use strict';

describe('Filter: limitText', function () {

  beforeEach(module('newsFrontendApp'));

  var limitText;
  beforeEach(inject(function ($filter) {
    limitText = $filter('limitText');
  }));

  it('should return "limitText filter:"', function () {
    var text = 'angularjs';
    expect(limitText(text)).toBe('limitText filter: ' + text);
  });

});
