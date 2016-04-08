; // jshint ignore:line
(function () {
    'use strict';
    
    require('../filters/contacts.list.search.filter');
    var templateUrl = require('./contacts.list.directive.html');

    angular.module('ContactsApp.directives.contacts.list', [
        'ContactsApp.filters.search'
    ])
        .directive('contactsList', function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: templateUrl,
                controller: function($scope, ContactsListService) {
                    $scope.search = {
                        value: ''
                    };

                    $scope.contacts = ContactsListService.getContacts();
                    
                    $scope.selectContact = function(contact) {
                        ContactsListService.setSelectedContact(contact);
                    };
                    
                    $scope.isSelectedContact = function(contact) {
                        return ContactsListService.getSelectedContact() === contact;    
                    };

                    $scope.clear = function() {
                        $scope.search.value = '';
                    };
                }
            };
        });
})();