/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("ContactApp").controller("ContactController",["$http", function ($http) {
    var self = this;

    this.contacts = [];
    this.contact;
    this.tmpContact;
    this.edit = false;
    this.add = false;
    this.filtre = "";

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
        self.tmpContact.deleted = false;
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
        $contact.deleted = true;
    }

    this.countContact = function () {
        count = 0;
        for ( i = 0; i < self.contacts.length; i++) {
            if ( self.contacts[i].deleted == false )
                count++;
        }

        return count;
    }

    this.cancel = function () {
        for ( i = 0; i < self.contacts.length; i++) {
            if ( self.contacts[i].deleted == true )
                self.contacts[i].deleted = false;
        }
    }
}]);
