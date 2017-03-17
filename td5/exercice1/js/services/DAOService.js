/**
 * Created by PICOT Maxence on 17/03/2017.
 */

angular.module("MainModule").service('DAOService', ["$http", function(http) {
    var self = this;

    this.products;
    this.clients;

    http.get("json/clients.json").then(successCallBack);
    function successCallBack(response) {
        self.clients = response.data;
    }

    http.get("json/products.json").then(successCallBack);
    function successCallBack(response) {
        self.products = response.data;
    }

    this.getProducts = function () {
        return self.products;
    }

    this.getClients = function () {
        return self.clients;
    }

}]);
