'use strict';

describe('Service: RestNews', function () {

  beforeEach(module('newsFrontendApp'));

  var RestNews;
  beforeEach(inject(function (_RestNews_) {
      RestNews = _RestNews_;
    }));

  it('should do something', function () {
    expect(!!RestNews).toBe(true);
  });

});
