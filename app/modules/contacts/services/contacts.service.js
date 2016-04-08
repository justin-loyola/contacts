; // jshint ignore:line
(function () {
    'use strict';
    require('../factories/contacts.factory');
    
    angular.module('ContactsApp.services.contacts', [
        'ContactsApp.factories.contacts'
    ])
        .service('ContactsService', function(Contacts) {
            this.contacts = new Contacts();
            
            this.getContactList = function() {
                return this.contacts.contactsList;
            };
            
            this.setSelectedContact = function(contact) {
                this.contacts.contactsList.selectedContact = contact;
            };
            
            this.getSelectedContact = function() {
                return this.contacts.contactsList.selectedContact;
            };

            this.addField = function(field) {
                this.contacts.contactsList.selectedContact.addField(field);
            };

            this.addContact = function(contact) {
                this.contacts.contactsList.addContact(contact);
            };

            this.removeContact = function(contact) {
                this.contacts.contactsList.remove(contact);
            };


            return this;    
        });
})();