/**
 * Created by PICOT Maxence on 07/02/2017.
 */

angular.module("CurrencyApp").controller("CurrencyController",["$http", "CurrencyService", function ($http,$service) {
    var self = this;

    this.currencies;
    this.from;
    this.to;
    this.service = $service;

    $http.get("json/currencymap.json").then(successCallBack);
    function successCallBack(response) {
        self.currencies = response.data;
        self.from = self.currencies["EUR"];
        self.to = self.currencies["USD"];
    }

    this.what = 1;
    this.result;

    this.getResult = function () {
        $http.jsonp('http://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result=response.data[self.from.code+'_'+self.to.code].val;
                self.service.update(self.from,self.to,self.what,null,self.result);
            });
        return self.result;
    }

    this.swap = function () {
        tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    }

    this.refresh = function (item) {
        item.date = new Date();
        self.from = self.currencies[item.from.code];
        self.to = self.currencies[item.to.code];
        self.result = item.amount();
        self.what = item.what;
    }
}]);