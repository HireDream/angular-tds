/**
 * Created by PICOT Maxence on 24/02/2017.
 */

angular.module("CurrencyApp").service('CurrencyService', function() {
    var self = this;

    this.historique = [];

    this.update = function (from,to,what,hashisto,result) {
        this.conversion = null;
        for ( i = 0; i < self.historique.length & this.conversion == null; i++) {
            tmp = self.historique[i];
            if ( tmp.from.code == from.code & tmp.to.code == to.code)
                this.conversion = tmp;
        }

        this.tx = result/what;
        if ( this.conversion == null ) {
            this.conversion = {
                from: from,
                to: to,
                amount : function(){ return this.what*this.rate},
                initialAmount : function(){ return this.what*this.initialRate},
                delta: 0,
                rate: this.tx,
                what: 0,
                date: null,
                update: null,
                initialRate: this.tx
            };
            self.historique.push(this.conversion);
        }

        this.conversion.what = what;
        this.conversion.date = new Date();
        this.conversion.delta = (this.tx-this.conversion.initialRate)*what;

        return self.historique;
    }

    this.remove = function (element) {
        self.historique.splice(self.historique.indexOf(element),1);
    }
});
