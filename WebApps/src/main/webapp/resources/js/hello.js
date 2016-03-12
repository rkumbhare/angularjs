var app = angular.module("app", []);

app.controller("helloController", ['$scope', helloController]);

function helloController($scope){
	$scope.message = "Hello World!";
}