; // jshint ignore:line
(function() {
    'use strict';
    
    angular.module('ContactsApp.filters.search', [])
    .filter('searchfilter', function($sce) {
        return function (input, query) {
            var fullName = input.firstName.value + ' ' + input.lastName.value;
            if (query === '') {
                return $sce.trustAsHtml(fullName);
            }
            return $sce.trustAsHtml(fullName.replace(RegExp('('+ query + ')', 'gi'), '<span class="bold">$1</span>'));
        }
    });
})();