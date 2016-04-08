; // jshint ignore:line
(function() {
    'use strict';
    
    require('../factory/dropdown.factory');
    require('../factory/dropdown.item.factory');
    require('../../contacts.edit.pane/factories/contacts.edit.menu.factory');
    var templateUrl = require('./dropdown.directive.html');

    angular.module('ContactsApp.directives.dropdown', [
            'ContactsApp.factories.dropdown',
            'ContactsApp.factories.dropdown.item',
            'ContactsApp.factories.edit.menu'
        ])
        .directive('dropdown', function($timeout, EditMenu) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: templateUrl,
                scope: {
                    menu: '='    
                },
                controller: function($scope) {
                    $scope.open = function() {
                        $scope.show = !$scope.show;
                    };
                },
                link: function(scope, element) {
                    scope.show = false;
                    scope.dropdown = new EditMenu();

                    $timeout(function() {
                        var dropdownHeight = element[0].offsetHeight;
                        element[0].querySelector('.dropdown-menu').style.top = dropdownHeight + 'px';
                        var menuWidth = element[0].querySelector('.dropdown-menu').offsetWidth;
                        var subMenus = element[0].querySelectorAll('.sub-menu');
                        var subMenusLength = subMenus.length;

                        for (var i = 0; i < subMenusLength; i++) {
                            var overlap = 5;
                            subMenus[i].style.left = menuWidth - overlap + 'px';
                            subMenus[i].style.top = -(subMenus[i].offsetHeight / 3) + 'px';
                        }
                    });

                    document.addEventListener('click', function(event) {
                        if (event.target !== element[0] && !element[0].contains(event.target)) {
                            $timeout(function() {
                                scope.show = false;
                            });
                        }
                    });
                }
            };
        });
})();