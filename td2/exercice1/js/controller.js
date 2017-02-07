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
        self.includedItems = self.includedItems.concat(self.selectedDispoItems);
        self.dispoItems = self.dispoItems.filter(function(x) { return self.selectedDispoItems.indexOf(x) < 0 })
        self.selectedDispoItems = [];
    }
    
    this.addAllToIncluded = function () {
        self.includedItems = self.includedItems.concat(self.dispoItems);
        self.selectedDispoItems = [];
        self.dispoItems = [];
    }
    
    this.removeFromIncluded = function () {
        self.dispoItems = self.dispoItems.concat(self.selectedIncludedItems);
        self.includedItems = self.includedItems.filter(function(x) { return self.dispoItems.indexOf(x) < 0 })
        self.selectedDispoItems = [];
    }
    
    this.removeAllFromIncluded = function () {
        self.dispoItems = self.dispoItems.concat(self.includedItems);
        self.includedItems = [];
    }

}]);