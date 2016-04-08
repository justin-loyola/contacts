; // jshint ignore:line
(function() {
    'use strict';
 
    describe('Module: ContactsApp.factories.contacts.field', function () {
        describe('Factory: ContactsField', function() {
            require('angular');
            require('angular-mocks');
            require('../factories/contacts.field.factory');
            var ContactsField;
         
            beforeEach(angular.mock.module('ContactsApp.factories.contacts.field'));
            beforeEach(inject(function(_ContactsField_) {
                ContactsField = _ContactsField_;
            }));
         
            it('should be defined', function() {
                expect(ContactsField).toBeDefined();
            });
         
            it('should properly set properties', function() {
                var field = new ContactsField('1', '2', '3', {
                    test: true    
                });
                expect(field.label).toEqual('1');
                expect(field.value).toEqual('2');
                expect(field.placeholder).toEqual('3');
                expect(field.options).toEqual({
                    test: true
                });
            });
        });
    });
})();
