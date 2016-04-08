; // jshint ignore:line
(function () {
    'use strict';
    
    require('../../../modules/contacts.list/factories/contacts.list.factory');
    
    angular.module('ContactsApp.services.contacts.list', [
        'ContactsApp.factories.contacts.list'
    ])
        .service('ContactsListService', function(ContactsList) {
            this.contactsList = new ContactsList();

            this.getContacts = function() {
                return this.contactsList;
            };
            
            this.addContact = function(contact) { 
                this.contactsList.addContact(contact);
            };

            this.setSelectedContact = function(contact) {
                this.contactsList.setSelectedContact(contact);
            };

            this.getSelectedContact = function() {
                return this.contactsList.getSelectedContact();
            };
            
            this.removeContact = function(contact) {
                this.contactsList.removeContact(contact);    
            };

            return this;
        });

})();