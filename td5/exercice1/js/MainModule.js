/**
 * Created by PICOT Maxence on 17/03/2017.
 */

angular.module('MainModule', ['ngRoute'])
    .config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'templates/main.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            }).
            when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            }).
            when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            }).
            when('/in/', {
                templateUrl: 'templates/main.html',
                controller: 'InController',
                controllerAs: 'inCtrl'
            }).
            when('/in/exit', {
                templateUrl: 'templates/in/exit.html',
                controller: 'InController',
                controllerAs: 'inCtrl'
            }).
            when('/in/clients', {
                templateUrl: 'templates/in/list.html',
                controller: 'ClientsController',
                controllerAs: 'clientCtrl'
            }).
            when('/in/products', {
                templateUrl: 'templates/in/list.html',
                controller: 'ProductsController',
                controllerAs: 'productsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
            if(window.history && window.history.pushState){
                $locationProvider.html5Mode(true);
            }
    }]);