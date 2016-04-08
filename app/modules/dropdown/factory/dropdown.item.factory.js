; // jshint ignore:line
(function() {
    'use strict';
    
    angular.module('ContactsApp.factories.dropdown.item', [])
        .factory('DropdownItem', function() {
            function DropdownItem() {
                this.text = '';
                this.divider = false;
                this.clickHandler = null;
            }
            
            return DropdownItem;
        });
})();