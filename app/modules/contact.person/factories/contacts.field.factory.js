; // jshint ignore:line
(function() {
    'use strict';
    require('../factories/contacts.field.factory');
    
    angular.module('ContactsApp.factories.contacts.field', [])
        .factory('ContactsField', function() {
            /**
             * 
             * @param {String} label
             * @param {*} value
             * @param {String} placeholder
             * @param {Object} options
             * @constructor
             */
            function ContactsField(label, value, placeholder, options) {
                this.label = label;
                this.value = value;
                this.placeholder = placeholder;
                this.options = options;
            }
            
            return ContactsField;
        });
})();