; // jshint ignore:line
(function () {
    'use strict';
    
    require('../factories/contacts.edit.pane.factory');

    angular.module('ContactsApp.services.contacts.edit.pane', [
        'ContactsApp.factories.contacts.edit.pane'
    ])
        .service('ContactsEditPaneService', function(ContactsEditPane) {
            this.pane = new ContactsEditPane();

            /**
             * Retrieves the editing pane instance
             * @returns {ContactsEditPane}
             */
            this.getPane = function() {
                return this.pane;
            };

            /**
             * @param {boolean} edit
             */
            this.setIsEditing = function(edit) {
                this.getPane().setIsEditing(edit);
            };

            /**
             * 
             * @returns {Boolean}
             */
            this.isEditing = function() {
                return this.getPane().isEditing();
            };
            
            return this;
        });
})();