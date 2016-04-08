; // jshint ignore:line
(function () {
    'use strict';
    
    angular.module('ContactsApp.factories.contacts.edit.pane', [])
        .factory('ContactsEditPane', function() {
            /**
             * @constructor
             */
            function ContactsEditPane() {
                /**
                 * @type {boolean}
                 */
                this.editing = false;                
            }

            /**
             * @param {boolean} editing
             */
            ContactsEditPane.prototype.setIsEditing = function(editing) {
                this.editing = editing;    
            };

            /**
             * @returns {boolean}
             */
            ContactsEditPane.prototype.isEditing = function() {
                return this.editing;
            };
            
            return ContactsEditPane;    
        });
})();