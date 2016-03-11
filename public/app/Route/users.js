(function() {
    'use strict';

    angular.module('mcms.Route')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl:  'app/templates/User/index.html',
                controller: 'UserController',
                controllerAs: 'VM',
                name : 'user-home'
            });

    }

})();