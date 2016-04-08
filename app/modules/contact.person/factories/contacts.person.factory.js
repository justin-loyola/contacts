; // jshint ignore:line
(function() {
    'use strict';
    
    require('lodash');
    
    angular.module('ContactsApp.factories.contacts.person', [
        'ContactsApp.factories.contacts.field'
    ])
        .factory('ContactPerson', function(ContactsField) {
            /**
             *
             * @constructor
             */
            function ContactPerson() {
                /**
                 * @type {String|null}
                 */
                this.firstName = new ContactsField('First', '', 'First', {
                    iterate: false
                });
                /**
                 * @type {String|null}
                 */
                this.lastName = new ContactsField('Last', '', 'Last', {
                    iterate: false
                });
            }

            ContactPerson.prototype.addField = function(field) {
                this[field.label] = field;
            };

            /**
             * @param {String|null} name
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setFirstName = function(name) {
                this.firstName = name;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getFirstName = function() {
                return this.firstName;
            };

            /**
             * @param {String|null} name
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setLastName = function(name) {
                this.lastName = name;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getLastName = function() {
                return this.lastName;
            };

            /**
             * @param {Boolean} company
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setIsCompany = function(company) {
                this.company = company;
                return this;
            };

            /**
             * @returns {Boolean}
             */
            ContactPerson.prototype.isCompany = function() {
                return this.company;
            };

            /**
             * @param {String|null} company
             */
            ContactPerson.prototype.setCompanyName = function(company) {
                this.companyName = company;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getCompanyName = function() {
                return this.companyName;
            };

            /**
             * @param {String|null} phone
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setMobilePhone = function(phone) {
                this.mobilePhone = phone;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getMobilePhone = function() {
                return this.mobilePhone;
            };

            /**
             * @param {String|null} phone
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setHomePhone = function(phone) {
                this.homePhone = phone;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getHomePhone = function() {
                return this.homePhone;
            };

            /**
             * @param {String|null} url
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setHomePage = function(url) {
                this.homePage = url;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getHomePage = function() {
                return this.homePage;
            };

            /**
             * @param {Number|null} birthday
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setBirthday = function(birthday) {
                this.birthday = birthday;
                return this;
            };

            /**
             * @returns {Number|null}
             */
            ContactPerson.prototype.getBirthday = function() {
                return this.birthday;
            };

            /**
             * @param {String|null} address
             * @returns {ContactPerson}
             */
            ContactPerson.prototype.setHomeAddress = function(address) {
                this.homeAddress = address;
                return this;
            };

            /**
             * @returns {String|null}
             */
            ContactPerson.prototype.getHomeAddress = function() {
                return this.homeAddress;
            };

            return ContactPerson;
        });
})();