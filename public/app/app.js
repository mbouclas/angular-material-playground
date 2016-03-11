(function() {
    'use strict';

    angular.module('mcms', [
        'ngSanitize',
        'ngRoute',
        'ngMessages',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'mcms.Base',
        'mcms.Route',
        'mcms.User',
        'mcms.Product'
    ])
        .config(config);

    config.$inject = ['$compileProvider', '$locationProvider','$mdThemingProvider'];

    function config($compileProvider, $locationProvider,$mdThemingProvider){
        $compileProvider.debugInfoEnabled(true);
        $locationProvider.html5Mode(false);
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('red');
    }

    require('./Base');
    require('./Route');
    require('./User');
    require('./Product');
})();