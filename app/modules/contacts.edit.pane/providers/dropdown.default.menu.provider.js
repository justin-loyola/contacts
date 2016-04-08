; // jshint ignore:line
(function() {
    'use strict';
    angular.module('ContactsApp.providers.dropdown.default.menu', [])
        .provider('defaultEditMenu', function() {
            this.menu = [
                {
                    text: 'New Contact',
                    clickHandler: function() {
                        console.log('new contact');
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