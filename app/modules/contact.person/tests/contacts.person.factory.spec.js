// ; // jshint ignore:line
// (function() {
//     'use strict';
//
//     describe('Module: ContactsApp.factories.contacts.person', function () {
//         describe('Factory: ContactsPerson', function() {
//             require('angular');
//             require('angular-mocks');
//             require('../factories/contacts.person.factory');
//             require('../factories/contacts.field.factory');
//             var ContactPerson;
//
//             beforeEach(angular.mock.module('ContactsApp.factories.contacts.person'));
//             beforeEach(inject(function(_ContactPerson_) {
//                 ContactPerson = _ContactPerson_;
//             }));
//
//             it('should be defined', function() {
//                 expect(ContactPerson).toBeDefined();
//             });
//
//             it('should properly set properties', function() {
//                 var contact = new ContactPerson();
//                 expect(contact.firstName.label).toEqual('First');
//                 expect(contact.firstName.value).toEqual('');
//                 expect(contact.firstName.placeholder).toEqual('First');
//                 expect(contact.firstName.options).toEqual({
//                     iterate: false
//                 });
//             });
//         });
//     });
// })();