; // jshint ignore:line
(function() {
    'use strict';

    require('../services/contacts.edit.pane.service');
    require('../../contacts/services/contacts.service');
    require('../../contacts.list/services/contacts.list.service');
    require('../../contact.person/factories/contacts.person.factory');

    angular.module('ContactsApp.providers.dropdown.default.menu', [
        'ContactsApp.factories.contacts.person'
    ])
        .provider('defaultEditMenu', function(ContactsServiceProvider, ContactsEditPaneServiceProvider, ContactsListServiceProvider, ContactPersonProvider) {
            this.menu = [
                {
                    text: 'New Contact',
                    clickHandler: function() {
                        var contact = new ContactPerson();
                        ContactsService.addContact(contact);
                        ContactsEditPaneService.setIsEditing(true);
                        ContactsListService.setSelectedContact(contact);
                    }
                },
                {
                    divider: true
                },
                {
                    text: 'Add Field to Card:',
                    disabled: true
                },
                {
                    text: 'Phone',
                    clickHandler: function() {
                        console.log('phone');
                    }
                },
                {
                    text: 'Email',
                    clickHandler: function() {
                        console.log('email');
                    }
                },
                {
                    text: 'Address',
                    clickHandler: function() {
                        console.log('address');
                    }
                },
                {
                    text: 'Profile',
                    clickHandler: function() {
                        console.log('profile');
                    }
                },
                {
                    text: 'More Options',
                    menu: [
                        {
                            text: 'Twitter',
                            clickHandler: function() {
                                console.log('phone');
                            }
                        },
                        {
                            text: 'Anniversary',
                            clickHandler: function() {
                                console.log('phone');
                            }
                        }
                    ],
                    clickHandler: function() {
                        console.log('more');
                    }
                }
            ];
            
            this.$get = function() {
                return this;
            };
        });
})();