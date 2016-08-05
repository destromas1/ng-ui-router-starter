"use strict";

angular.module("app").controller('homeCtrl', ['$scope','$state', function ($scope , $state) {
    console.log('homeCtrl is running...');

    $scope.redirectRoute = function (routeName) {
        //alert(routeName);
        $state.go('app.url' , {url : routeName});
    };

}]);

