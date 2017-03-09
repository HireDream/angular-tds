/**
 * Created by PICOT Maxence on 07/02/2017.
 */


angular.module('CurrencyApp', [])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://free.currencyconverterapi.com/api/v3/**'
        ]);
    }]);