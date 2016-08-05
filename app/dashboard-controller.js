"use strict";

angular.module("app").controller('dashboardCtrl', ['$scope','$state','$stateParams', function ($scope , $state, $stateParams) {
    console.log('dashboardCtrl is running...');

    $scope.passNameToProfile = function () {
        $state.go('app.url', { url: 'profile' ,data: { dashboardName: $scope.dashboardName } });
    };

    $scope.currencyVal = undefined;
    $scope.phonenoVal = undefined;

}]);

