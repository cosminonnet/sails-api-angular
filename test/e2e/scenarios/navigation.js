'use strict';

describe("Navigation: Index", function() {
    it('should redirect to the index page', function() {
        browser().navigateTo('/');
        expect(browser().location().url()).toBe('/index');
    });
});

describe("Navigation: Unknown", function() {
    it('should redirect to the index page', function() {
        browser().navigateTo('/#/abcdefghij');
        expect(browser().location().url()).toBe('/index');
    });
});

describe("Navigation: About", function() {
    it('should redirect to the about page', function() {
        browser().navigateTo('/#/about');
        expect(browser().location().url()).toBe('/about');
    });
});

describe("Navigation: Features", function() {
    it('should redirect to the features page', function() {
        browser().navigateTo('/#/features');
        expect(browser().location().url()).toBe('/features');
    });
});

describe("Navigation: Customers", function() {
    it('should redirect to the customers page', function() {
        browser().navigateTo('/#/customers');
        expect(browser().location().url()).toBe('/customers');
    });
});

describe("Navigation: Pricing", function() {
    it('should redirect to the pricing page', function() {
        browser().navigateTo('/#/pricing');
        expect(browser().location().url()).toBe('/pricing');
    });
});
