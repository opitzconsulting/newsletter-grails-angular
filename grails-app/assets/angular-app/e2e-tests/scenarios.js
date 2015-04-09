'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /newsletter when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/newsletter");
  });


  describe('customer', function() {

    beforeEach(function() {
      browser.get('index.html#/customer');
    });


    it('should render customer-view when user navigates to /customer', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('newsletter', function() {

    beforeEach(function() {
      browser.get('index.html#/newsletter');
    });


    it('should render newsletter-view when user navigates to /newsletter', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
