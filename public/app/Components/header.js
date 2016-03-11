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

    function headerComponentController(){
        var vm = this;


    }
})();
