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
                            ContactsEditPaneService.setIsEditing(true);
                        }
                    },
                    {
                        text: 'Email',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('email', '', 'Email'));
                            ContactsEditPaneService.setIsEditing(true);
                        }
                    },
                    {
                        text: 'Address',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('home address', '', 'Address'));
                            ContactsEditPaneService.setIsEditing(true);
                        }
                    },
                    {
                        text: 'Profile',
                        clickHandler: function() {
                            ContactsService.addField(new ContactsField('profile', '', 'Profile'));
                            ContactsEditPaneService.setIsEditing(true);
                        }
                    },
                    {
                        text: 'More Options',
                        menu: [
                            {
                                text: 'Twitter',
                                clickHandler: function() {
                                    ContactsService.addField(new ContactsField('twitter', '', 'Twitter'));
                                    ContactsEditPaneService.setIsEditing(true);
                                }
                            },
                            {
                                text: 'Anniversary',
                                clickHandler: function() {
                                    ContactsService.addField(new ContactsField('Anniversary', '', 'Month/Day/Year'));
                                    ContactsEditPaneService.setIsEditing(true);
                                }
                            }
                        ]
                    }
                ]
            }

            return EditMenu;
        });
})();