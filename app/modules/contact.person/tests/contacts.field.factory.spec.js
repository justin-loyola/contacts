'use strict';

describe('Module: ContactsApp.factories.contacts.field', function () {
    describe('Factory: ContactsField', function() {
        require("angular");
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
    });
});