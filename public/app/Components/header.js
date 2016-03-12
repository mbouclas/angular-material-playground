(function() {
    angular.module('mcms.Components')
        .directive('headerComponent', headerComponent);

    headerComponent.$inject = [];
    headerComponentController.$inject = [];

    function headerComponent(){

        return {
            require : 'headerComponent',
            templateUrl: "app/templates/Components/header.component.html",
            controller: headerComponentController,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    headerComponentController.$inject=['$scope', '$mdSidenav','$mdBottomSheet'];
    function headerComponentController($scope,$mdSidenav,$mdBottomSheet){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
          };
         $scope.showListBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
              template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> </md-bottom-sheet>',
              targetEvent: $event
            }).then(function(clickedItem) {
              $scope.alert = clickedItem.name + ' clicked!';
            });
          };
    }
})();
