/*globals describe:true, it:true*/
var chai = require('chai').should(),
    Person = require('./backend/file1.js');
describe('Person', function () {
    'use strict';
    describe('greets people', function () {
        it('can greet people', function () {
            var p1 = new Person('Shardul'),
                p2 = new Person('Arihant');
            p1.greet(p2).should.equal("Hello Arihant");
        });
    });
});