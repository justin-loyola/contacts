; // jshint ignore:line
(function() {
    'use strict';
    require('../factories/contacts.field.factory');
    
    angular.module('ContactsApp.factories.contacts.field', [])
        .factory('ContactsField', function() {
            function ContactsField() {
                this.label = '';
                this.value = '';
                this.placeholder = '';
            }
            
            return ContactsField;
        });
})();