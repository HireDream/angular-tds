/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("ListeApp").controller("ListeController",["$http", function ($http) {
    var self = this;
    this.includedItems = [];
    this.selectedDispoItems = [];
    this.selectedIncludedItems = [];
    this.step = 1;
    this.dispoItems = [];

    $http.get("json/produits.json").then(successCallBack);
    function successCallBack(response) {
        self.dispoItems = response.data;
    }


    this.addToIncluded = function() {
        self.includedItems.concat(self.selectedDispoItems);
        self.selectedDispoItems = [];
    }
    
    this.addAllToIncluded = function () {
        self.includedItems.concat(self.dispoItems);
        self.dispoItems = [];
    }
    
    this.removeFromIncluded = function () {
        self.dispoItems.concat(self.selectedIncludedItems);
        self.selectedDispoItems = [];
    }
    
    this.RemoveAllFromIncluded = function () {
        self.dispoItems.concat(self.includedItems);
        self.includedItems = [];
    }

}]);