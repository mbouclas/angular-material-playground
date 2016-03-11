(function() {
    'use strict';

    angular.module('mcms.Route',[])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:  'app/templates/default.html',
                controller: 'AppCtrl',
                controllerAs: 'VM',
                name : 'home'
            })
            .otherwise('/');

    }

    require('./users');
    require('./products');
})();