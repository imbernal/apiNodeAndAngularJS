var app = angular.module("apiApp" , ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when("/stocks" , {
      templateUrl: "assets/templates/table_stock.html",
      controller: "mainController"
    });
});
