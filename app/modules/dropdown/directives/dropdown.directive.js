; // jshint ignore:line
(function() {
    'use strict';
    
    require('../factory/dropdown.factory');
    require('../factory/dropdown.item.factory');
    require('../../contacts.edit.pane/providers/dropdown.default.menu.provider');
    var templateUrl = require('./dropdown.directive.html');

    angular.module('ContactsApp.directives.dropdown', [
            'ContactsApp.factories.dropdown',
            'ContactsApp.factories.dropdown.item',
            'ContactsApp.providers.dropdown.default.menu'
        ])
        .directive('dropdown', function($timeout, defaultEditMenu) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: templateUrl,
                controller: function($scope) {
                    $scope.open = function() {
                        $scope.show = !$scope.show;
                    };

                    $scope.handler = function(item) {
                        if (_.isFunction(item.clickHandler) === true) {
                            item.clickHandler();
                        }
                    };
                },
                link: function(scope, element) {
                    scope.show = false;
                    scope.dropdown = defaultEditMenu;

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