/**
 * Created by PICOT Maxence on 27/01/2017.
 */
angular.module("NoteApp").controller("NoteController",["$cookies", function ($cookies) {
    var self = this;
    this.messageNote = $cookies.get('note');
    if ( !this.messageNote )
        this.messageNote = "";
    this.info = "";
    this.warning = false;
    this.danger = false;
    
    this.save = function() {
        self.info = "Note enregistrée.";
        $cookies.put('note', self.messageNote);
    }

    this.clear = function() {
        if(self.messageNote != ""){
            self.messageNote = "";
        }
    }

    this.count = function() {
        self.info = "Note modifiée."
        r = 100-self.messageNote.length;
        if ( r < 10 ) {
            self.danger = true;
            self.warning = false;
        } else if ( r < 50 ) {
            self.warning = true;
            self.danger = false;
        } else {
            self.warning = false;
            self.danger = false;
        }
        return r;
    }


}]);
