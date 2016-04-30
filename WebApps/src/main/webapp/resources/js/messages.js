var msgApp = angular.module("msgApp", []);

msgApp.factory("msgService", [ '$window', msgService ]);
msgApp.directive("info", [ "$compile", 'msgService', infoDirective ]);
msgApp.directive("error", [ "$compile", 'msgService', errorDirective ]);
msgApp.directive("warn", [ "$compile", 'msgService', warnDirective ]);
msgApp.controller("dirController", [ "$scope", dirController ]);
msgApp.controller("msgAppController", [ '$scope', 'msgService',
		msgAppController ]);

function msgService($window) {
	var info = "Info Message";
	var error = "Error Message";
	var warn = "Warning Message";

	return {
		setInfo : function(msg) {
			info = msg;
		},
		getInfo : function() {
			return info;
		},
		setError : function(msg) {
			error = msg;
		},
		getError : function() {
			return error;
		},
		setWarn : function(msg) {
			warn = msg;
		},
		getWarn : function() {
			return warn;
		}
	};
};

function infoDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='info'>{{infoMsg}}</div>",
		controller : dirController,
		link : function(scope, element, attrs) {
			scope.$watch(function() {
				return msgService.getInfo();
			}, function(msg) {
				scope.infoMsg = msg;
			});
		}
	};
};

function errorDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='error'>{{errorMsg}}</div>",
		controller : dirController,
		link : function(scope, element, attrs) {
			scope.$watch(function() {
				return msgService.getError();
			}, function(msg) {
				scope.errorMsg = msg;
			});
		}
	};
};

function warnDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='warn'>{{warnMsg}}</div>",
		controller : dirController,
		link : function(scope, element, attrs) {
			scope.$watch(function() {
				return msgService.getWarn();
			}, function(msg) {
				scope.warnMsg = msg;
			});
		}
	};
};

function dirController($scope) {
};

function msgAppController($scope, msgService) {

	$scope.msg = "Custom Directive - Messages Demo";

	$scope.setInfo = function(msg) {
		msgService.setInfo(msg);
	};

	$scope.setError = function(msg) {
		msgService.setError(msg);
	};

	$scope.setWarn = function(msg) {
		msgService.setWarn(msg);
	};

};