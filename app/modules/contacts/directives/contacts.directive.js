/**
 * @TODO:
 * - Add button menu
 * - Remove field
 * - Empty state for edit pane
 * - Avatar directive
 * - Responsive add button behavior (i.e. dropdown menu not conducive to small screens)
 * - Responsiveness clean up - some small height issues with the edit pane
 * - Unit tests
 * - Documentation
 */


'use strict';

; // jshint ignore:line
(function () {
    require('../styles/contacts.directive.scss');
    require('../factories/contacts.factory');
    require('../services/contacts.service');
    require('../../contacts.list/directives/contacts.list.directive');
    require('../../contacts.edit.pane/directives/contacts.edit.pane.directive');
    require('../../contact.person/factories/contacts.person.factory.js');
    var templateUrl = require('./contacts.directive.html');

    angular.module('ContactsApp.directives.contacts', [
        'ContactsApp.services.contacts',
        'ContactsApp.directives.contacts.list',
        'ContactsApp.directives.contacts.edit.pane',
        'ContactsApp.factories.contacts',
        'ContactsApp.factories.contacts.person'
    ])
        .directive('contacts', function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: templateUrl
            };
        });
})();