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
        'mcms.Product',
        'mcms.Components'
    ])
    
    .config(config);

    config.$inject = ['$compileProvider', '$locationProvider','$mdThemingProvider', '$mdIconProvider'];

    function config($compileProvider, $locationProvider,$mdThemingProvider,$mdIconProvider){
        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50'],
                '50': 'ffffff'
              });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');
        $compileProvider.debugInfoEnabled(true);
        $locationProvider.html5Mode(false);
        $mdIconProvider
               .defaultFontSet( 'fontawesome' )
               .defaultIconSet('fonts/fontawesome-webfont.svg') ;      // Register a default set of SVG icons           
        }

    require('./Base');
    require('./Route');
    require('./User');
    require('./Product');
    require('./Components');
})();