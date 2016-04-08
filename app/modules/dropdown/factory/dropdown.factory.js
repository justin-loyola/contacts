; // jshint ignore:line
(function() {
    'use strict';
    
    angular.module('ContactsApp.factories.dropdown', [])
        .factory('Dropdown', function() {
            function Dropdown() {
                this.menu = [];    
            }
            
            return Dropdown;
        });
})();