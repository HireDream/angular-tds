/**
 * Created by PICOT Maxence on 27/01/2017.
 */
angular.module("NoteApp").controller("NoteController", function () {
    var self = this;
    this.messageNote = "";
    this.info = "";
    this.status = function () {

    };
    
    function save() {

    }

    function clear() {
        self.messageNote = "";
    }

    this.count = function() {
        return 100-self.messageNote.length;
    }


});
