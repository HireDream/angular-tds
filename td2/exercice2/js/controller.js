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
    this.filtre = "";
    this.count;

    $http.get("json/contacts.json").then(successCallBack);
    function successCallBack(response) {
        self.contacts = response.data;
    }

    this.toUpdate = function($contact) {
        self.operation = "Modifier"
        self.edit = true;
        self.contact = $contact;
        self.tmpContact = Object.assign({}, self.contact);
    }

    this.toAdd = function () {
        self.operation = "Ajouter"
        self.edit = true;
        self.tmpContact = null;
    }

    this.add = function () {
        self.tmpContact.deleted = false;
        self.contacts.push(self.tmpContact);
    }

    this.update = function () {
        if ( self.operation == "Modifier") {
            self.contacts[self.contacts.indexOf(self.contact)] = self.tmpContact;
        } else {
            self.add();
        }

        self.tmpContact = null;
        self.edit = false;
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
