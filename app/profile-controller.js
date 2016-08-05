"use strict";

angular.module("app").controller('profileCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
	console.log('profileCtrl is running...');

	$scope.dashboardName = $stateParams.data ? $stateParams.data.dashboardName : "";
	
	$scope.sortedBy = {
		firstName: false
	};
	
}]);
