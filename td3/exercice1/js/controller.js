/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("CurrencyApp").controller("CurrencyController",["$http", function ($http) {
    var self = this;

    this.currencies;
    this.from;
    this.to;

    $http.get("json/currencymap.json").then(successCallBack);
    function successCallBack(response) {
        self.currencies = response.data;
        self.from = self.currencies["EUR"];
        self.to = self.currencies["USD"];
    }

    this.what = 1;
    this.result;

    this.getResult = function () {
        $http.jsonp('http://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code+'&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
            self.result = data[self.from.code + '_' + self.to.code].val;
        })

        return self.result;
    }

    this.swap = function () {
        tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    }
}]);