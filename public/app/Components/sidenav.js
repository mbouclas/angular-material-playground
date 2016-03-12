(function() {
    angular.module('mcms.Components')
        .directive('sidenavComponent', sidenavComponent);

    sidenavComponent.$inject = [];
    sidenavController.$inject = [];

    function sidenavComponent(){

        return {
            require : 'sidenavComponent',
            templateUrl: "app/templates/Components/sidenav.component.html",
            controller: sidenavController,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    sidenavController.$inject=['$scope', '$mdSidenav'];

    function sidenavController($scope, $mdSidenav) {
          $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
          };
            $scope.menu = [
            {
              link : '',
              title: 'Dashboard',
              icon: 'fa-tachometer'
            },
            {
              link : '',
              title: 'Friends',
              icon: 'group'
            },
            {
              link : '',
              title: 'Messages',
              icon: 'message'
            }
          ];
          $scope.admin = [
            {
              link : '',
              title: 'Trash',
              icon: 'delete'
            },
            {
              link : 'showListBottomSheet($event)',
              title: 'Settings',
              icon: 'settings'
            }
          ];

    }
})();
