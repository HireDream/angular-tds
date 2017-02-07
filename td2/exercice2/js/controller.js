/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("ContactApp").controller("ContactController",["$http", function ($http) {
    var self = this;

    this.contacts = [];
    this.contact;
    this.tmpContact;
    this.operation;
    this.edit = false;
    this.add = false;

    $http.get("json/contacts.json").then(successCallBack);
    function successCallBack(response) {
        self.contacts = response.data;
    }

    this.toUpdate = function($contact) {
        self.add = false;
        self.edit = true;
        self.contact = $contact;
        self.tmpContact = Object.assign({}, self.contact);
    }

    this.toAdd = function () {
        self.add = true;
        self.edit = false;
    }

    this.addContact = function () {
        self.contacts.push(self.tmpContact);
        self.add = false;
        self.tmpContact = null;
    }

    this.update = function () {
        var index = self.contacts.indexOf(self.contact);
        self.contacts[index] = self.tmpContact;
        self.edit = false;
        self.tmpContact = null;
    }

    this.delete = function ($contact) {
        var index = self.contacts.indexOf($contact);
        self.contacts.splice(index, 1);
    }
}]);
