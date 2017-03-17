/**
 * Created by PICOT Maxence on 17/03/2017.
 */


angular.module("MainModule").service('AuthService', function() {
    var self = this;

    this.users = ["Maxence","Test","Test2","Test3"];

    this.activeUser;
    this.username;

    this.checkLogin = function() {
        self.activeUser = self.users.indexOf(self.username);
    }

    this.isAuth = function () {
        return self.activeUser;
    }

});