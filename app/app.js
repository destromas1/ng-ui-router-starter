"use strict";

var app = angular.module("app" , ['ui.router' , 'ngAnimate']);

angular.module("app").config(function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise("/dashboard");
    
    $stateProvider.state('app', {
        abstract: true,
        url: '/',
        template: '<ui-view class="view-animation"/> '
    })
    .state('app.url', {
        url: ':url',
        controllerProvider: function ($stateParams) {
            return $stateParams.url + "Ctrl";
        },
        templateUrl: function ($stateParams) {
            return "partials/" + $stateParams.url + ".html";
        },
        params: { 'data': undefined }
    });

});
  
