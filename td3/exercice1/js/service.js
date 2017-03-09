/**
 * Created by PICOT Maxence on 24/02/2017.
 */

angular.module("CurrencyApp").service('CurrencyService', function() {
    var self = this;

    this.historique = [];

    this.update = function (from,to,what,hashisto,result) {
        bool = 0;
        x = 0;
        for ( i = 0; i < self.historique.length & bool == 0; i++) {
            tmp = self.historique[i];
            if ( tmp.from.code == from.code & tmp.to.code == to.code) {
                x = i;
                bool = 1;
            }
        }

        date = new Date();
        var tx = result/what;
        if ( bool == 0 ) {
            this.conversion = {
                from: from,
                to: to,
                amount: function () { return this.rate*what; },
                initialAmount: function () { return this.initialRate*what; },
                delta: 0,
                rate: tx,
                what: what,
                date: date,
                update: null,
                initialRate: tx
            };
            self.historique.push(this.conversion);
        } else {
            self.historique[x].delta = (tx - self.historique[x].initialRate)*what;
            self.historique[x].date = date;
            self.historique[x].rate = tx;
        }

        return self.historique;
    }

    this.remove = function (element) {
        self.historique.splice(self.historique.indexOf(element),1);
    }
});
