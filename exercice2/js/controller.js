/**
 * Created by PICOT Maxence on 03/02/2017.
 */

angular.module("ServiceApp").controller("ServiceController", function () {
    var self = this;

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
    };

    this.total = function () {
        total = 0;

        for ( i = 0; i < this.services.length; i++) {
            if ( self.services[i]['active'] ) {
                total += self.services[i]['price'];
            }
        }
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

});
