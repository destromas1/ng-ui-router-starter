"use strict";


angular.module("app").controller('contactCtrl', ['$scope','$state','$stateParams', function ($scope , $state, $stateParams) {

    console.log('contactCtrl is running...');

    $scope.num1 = 100;
    $scope.num2 = 100;
    $scope.num3 = 100;
    $scope.sum = $scope.num1 + $scope.num2 + $scope.num3;

    $scope.changeNumber = function () {
      $scope.sum = $scope.num1 + $scope.num2 + $scope.num3;
    };

    $scope.changeSum = function () {
      var quarterOfNewSum = $scope.sum / 4;
      $scope.num1 = quarterOfNewSum * 2;
      $scope.num2 = $scope.num3 = quarterOfNewSum;
    };

}]);

