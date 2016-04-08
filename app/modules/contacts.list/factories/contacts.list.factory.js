; // jshint ignore:line
(function () {
    'use strict';
    
    require('lodash');

    angular.module('ContactsApp.factories.contacts.list', [])
        .factory('ContactsList', function() {
            /**
             * 
             * @constructor
             */
            function ContactsList() {
                this.list = [];
                this.selectedContact = null;
            }

            /**
             * Sets the collection of contacts
             * @param {Contact[]} list Collection of contacts to set as the contact list
             */
            ContactsList.prototype.setList = function(list) {
                this.list = list;
            };

            /**
             * Retrieves the collection of contacts
             * @returns {Array}
             */
            ContactsList.prototype.getList = function() {
                return this.list;
            };

            /**
             * Adds the given contact to the collection contacts
             * @param {Contact} contact
             */
            ContactsList.prototype.addContact = function(contact) {
                this.list.push(contact);
            };

            /**
             * Removes the given contact from the collection of contacts
             * @param {Contact} contact
             */
            ContactsList.prototype.removeContact = function(contact) {
                _.remove(this.list, contact);
            };
            
            ContactsList.prototype.setSelectedContact = function(contact) {
                this.selectedContact = contact;
            };
            
            ContactsList.prototype.getSelectedContact = function() {
                return this.selectedContact;
            };

            return ContactsList;
        });
})();