/**
 * @ngdoc overview
 * @name
 * @author Created by justinloyola on 4/8/16
 * @copyright Copyright 2016, Captora, Inc. All Rights Reserved.
 * @description
 *
 */

'use strict';

; // jshint ignore:line
(function() {
    angular.module('ContactsApp.factories.edit.menu', [])
        .factory('EditMenu', function(ContactPerson, ContactsService, ContactsEditPaneService, ContactsListService, ContactsField) {
            function EditMenu() {
                this.menu = [
                    {
                        text: 'New Contact',
                        clickHandler: function() {
                            var contact = new ContactPerson();
                            ContactsEditPaneService.setIsEditing(true);
                            ContactsListService.setSelectedContact(contact);
                            ContactsService.addContact(contact);
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
                            ContactsService.addField(new ContactsField('phone', '', 'Phone'));
                        }
                    },
                    {
                        text: 'Email',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('email', '', 'Email'));
                        }
                    },
                    {
                        text: 'Address',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('home address', '', 'Address'));
                        }
                    },
                    {
                        text: 'Profile',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('profile', '', 'Profile'));
                        }
                    },
                    {
                        text: 'More Options',
                        menu: [
                            {
                                text: 'Twitter',
                                clickHandler: function() {
                                    ContactsService.addField(new ContactsField('twitter', '', 'Twitter'));
                                }
                            },
                            {
                                text: 'Anniversary',
                                clickHandler: function() {
                                    ContactsService.addField(new ContactsField('Anniversary', '', 'Month/Day/Year'));
                                }
                            }
                        ]
                    }
                ]
            }

            return EditMenu;
        });
})();