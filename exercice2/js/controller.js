/**
 * Created by PICOT Maxence on 03/02/2017.
 */

angular.module("ServiceApp").controller("ServiceController",["$http", function ($http) {
    var self = this;
    this.totals = 300;
    this.promoCoche = false;
    this.promoError = false;
    this.totalAvecRemise = 0;
    this.codePromo = "";
    this.remise = 0;

    this.promoExiste = function(){
        $http.get("json/promos.json").then(function(response) {
            self.remise = 0;
            self.totalAvecRemise = 0;
            self.promoError = true;
            angular.forEach(response.data, function(value, key){
                if(self.codePromo == key) {
                    self.remise = self.totals*value;
                    self.totalAvecRemise = self.totals-self.remise;
                    self.promoError = false;
                }
            });
        });
    }

    this.services = [{
        "name": "Web Development",
        "price": 300,
        "active":true
    },
    {
        "name": "Design",
        "price": 400,
        "active":false
    },
    {
        "name": "Integration",
        "price": 250,
        "active":false
    },
    {
        "name": "Formation",
        "price": 220,
        "active":false
    }];
    
    this.toggleActive = function ($service) {
        $service.active = !$service.active;
        self.promoExiste();
    };

    this.total = function () {
        total = 0;

        for ( i = 0; i < this.services.length; i++) {
            if ( self.services[i]['active'] ) {
                total += self.services[i]['price'];
            }
        }
        self.totals = total;
        return total;
    };

    this.nombreSelectionne = function () {
        nb = 0;
        for ( i = 0; i < this.services.length; i++) {
            if ( self.services[i]['active'] ) {
                nb++;
            }
        }
        return nb;
    };
}]);
