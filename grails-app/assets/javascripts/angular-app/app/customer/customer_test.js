'use strict';

describe('angularApp.app.customer module', function() {

  beforeEach(module('angularApp.app.customer'));

  describe('customer controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var customerCtrl = $controller('CustomerCtrl');
      expect(customerCtrl).toBeDefined();
    }));

  });
});