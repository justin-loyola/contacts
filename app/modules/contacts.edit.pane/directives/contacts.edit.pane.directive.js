; // jshint ignore:line
(function () {
    'use strict';
    
    require('lodash');
    require('angular-xeditable/dist/js/xeditable');
    require('angular-xeditable/dist/css/xeditable.css');
    require('../services/contacts.edit.pane.service');
    require('../../dropdown/directives/dropdown.directive');
    require('../../contact.person/factories/contacts.person.factory');
    require('../../contact.person/factories/contacts.field.factory');
    var templateUrl = require('./contacts.edit.pane.directive.html');
    
    angular.module('ContactsApp.directives.contacts.edit.pane', [
        'ContactsApp.factories.contacts.person',
        'ContactsApp.factories.contacts.field',
        'ContactsApp.services.contacts.edit.pane',
        'ContactsApp.directives.dropdown',
        'xeditable'
    ])
        .directive('contactsEditPane', function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: templateUrl,
                controller: function($scope, ContactsService, ContactsListService, ContactPerson, ContactsEditPaneService, ContactsField) {
                    var _isEmptyContact = function(contact) {
                        return _.every($scope.selectedContact, function(x) {
                            return x === false || x === null;
                        });
                    };
                    
                    $scope.$watch(function() {
                        return ContactsListService.getSelectedContact();
                    }, function(newValue) {
                        $scope.selectedContact = newValue;
                    });
                    
                    $scope.$watch(function() {
                        return ContactsEditPaneService.isEditing();
                    }, function(newValue) {
                        $scope.editing = newValue;
                        if (newValue === true) {
                            $scope.editableContact.$show();
                        }
                    });
                    
                    $scope.addContact = function() {
                        var contact = new ContactPerson();
                        ContactsService.addContact(contact);
                        ContactsEditPaneService.setIsEditing(true);
                        ContactsListService.setSelectedContact(contact);
                    };

                    $scope.editContact = function() {
                        ContactsEditPaneService.setIsEditing(true);
                    };

                    $scope.done = function() {
                        ContactsEditPaneService.setIsEditing(false);
                    };

                    /**
                     * TODO: validation of form
                     */
                    $scope.isValid = function() {
                        // if (_isEmptyContact($scope.selectedContact)) {
                        //     ContactsListService.removeContact($scope.selectedContact);
                        // }
                    };
                }
            };    
        });

})();