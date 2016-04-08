/**
 * @description
 * Factory that produces a Contacts object. The Contacts object is composed of a
 * reference to a ContactsList object and a ContactsEditPane object.
 */


; // jshint ignore:line
(function () {
    'use strict';
    
    require('../../../modules/contacts.list/services/contacts.list.service');
    require('../../../modules/contacts.edit.pane/factories/contacts.edit.pane.factory');
    require('../../../modules/contacts.edit.pane/services/contacts.edit.pane.service');

    angular.module('ContactsApp.factories.contacts', [
        'ContactsApp.services.contacts.list',
        'ContactsApp.services.contacts.edit.pane',
        'ContactsApp.factories.contacts.edit.pane'
    ])
        .factory('Contacts', function(ContactsListService, ContactsEditPaneService) {
            /**
             * 
             * @constructor
             */
            function Contacts() {
                this.contactsList = ContactsListService.getContacts();
                this.contactsEditPane = ContactsEditPaneService.getPane();
                this.selectedContact = null;
            }
            
            return Contacts;    
        });
})();