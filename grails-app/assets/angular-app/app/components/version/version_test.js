'use strict';

describe('nga.version module', function() {
  beforeEach(module('nga.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
