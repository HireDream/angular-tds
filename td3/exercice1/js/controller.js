/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("CurrencyApp").controller("CurrencyController",["$http", function ($http) {
    var self = this;

    this.currencies;

    $http.get("json/currencymap.json").then(successCallBack);
    function successCallBack(response) {
        self.currencies = response.data;
    }

    this.what = 1;
    this.from = this.currencies['EUR'];
    this.to = this.currencies['USD'];
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