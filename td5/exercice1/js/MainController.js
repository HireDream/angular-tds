/**
 * Created by PICOT Maxence on 17/03/2017.
 */

angular.module("MainModule").controller("MainController", ["AuthService","DAOService", function (authService,daoService) {
    var self = this;
    
    this.authService = authService;
    this.daoService = daoService;

}]);
