(function() {
    angular.module('mcms.Components')
        .directive('footerComponent', footerComponent);

    footerComponent.$inject = [];
    footerontroller.$inject = [];

    function footerComponent(){

        return {
            require : 'footerComponent',
            templateUrl: "app/templates/Components/footer.component.html",
            controller: footerontroller,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    function footerontroller(){
        var vm = this;


    }
})();
