(function() {
    'use strict';

    angular.module('mcms.Route')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/products', {
                templateUrl:  'app/templates/Product/index.html',
                controller: 'ProductController',
                controllerAs: 'VM',
                name : 'product-home'
            })
            .when('/products/add', {
                templateUrl:  'app/templates/Product/add.html',
                controller: 'AddProductController',
                controllerAs: 'VM',
                name : 'product-home'
            });
    }

})();