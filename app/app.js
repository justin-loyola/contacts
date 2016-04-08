; // jshint ignore:line
(function () {
    'use strict';
    
    require('angular');
    require('ionicons/css/ionicons.css');
    require('./styles/app.scss');
    require('./modules/contacts/directives/contacts.directive.js');

    angular.module('ContactsApp', [
        'ContactsApp.directives.contacts'
    ]);
})();