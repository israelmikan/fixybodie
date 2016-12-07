AngularFireCart.directive("alertDanger", function() {
    return{
        restrict: "C",
        template: "<strong>Before processing that!</strong> {{error}}"
    };
});