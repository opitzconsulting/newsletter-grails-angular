'use strict';

describe('angularApp.app.newsletter module', function() {

  beforeEach(module('angularApp.app.newsletter'));

  describe('newsletter controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var newsletterCtrl = $controller('NewsletterCtrl');
      expect(newsletterCtrl).toBeDefined();
    }));

  });
});