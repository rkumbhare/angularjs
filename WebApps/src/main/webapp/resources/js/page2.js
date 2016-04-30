var myApp = angular.module("myApp", []);

myApp.factory("msgService", [ '$window', msgService ]);
myApp.controller("myController", [ '$scope', 'msgService', myController ]);
myApp.controller("dirController", [ '$scope', 'msgService', dirController ]);
myApp.directive("info", [ '$compile', 'msgService', infoDirective ]);
myApp.directive("error", [ '$compile', 'msgService', errorDirective ]);
myApp.directive("warn", [ '$compile', 'msgService', warnDirective ]);

function msgService($window) {
	var msgs = [];
	var infoMsg = "info message";
	var errorMsg = "error message";
	var warnMsg = "Warning message";
	return {
		add : function(msg) {
			msgs.push(msg);
		},
		get : function() {
			return msgs;
		},
		clear : function() {
			msgs = [];
		},
		setInfo : function(msg) {
			infoMsg = msg;
		},
		getInfo : function() {
			return infoMsg;
		},
		setError : function(msg) {
			errorMsg = msg;
		},
		getError : function() {
			return errorMsg;
		},
		setWarning : function(msg) {
			warnMsg = msg;
		},
		getWarning : function() {
			return warnMsg;
		}
	};
};

function infoDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='info'>{{infoMsg}}</div>",
		link : function(scope, element, attrs) {
			// scope.infoMsg = "INFO : " + $scope.msgService.getInfo();
			scope.$watch(function() {
				return msgService.getInfo()
			}, function(msg) {
				scope.infoMsg = msg
			});
		}
	};
};

function errorDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='error'>{{errorMsg}}</div>",
		link : function(scope, element, attrs) {
			// scope.errorMsg = "ERROR : " + msgService.getError();
			scope.$watch(function() {
				return msgService.getError()
			}, function(msg) {
				scope.errorMsg = msg
			});
		}
	};
};

function warnDirective($compile, msgService) {
	return {
		replace : true,
		strict : 'A',
		template : "<div class='warn'>{{warnMsg}}</div>",
		link : function(scope, element, attrs) {
			// scope.warnMsg = "WARNING : " + msgService.getWarning();
			scope.$watch(function() {
				return msgService.getWarning()
			}, function(msg) {
				scope.warnMsg = msg
			});
		}
	};
};

function myController($scope, msgService) {
	$scope.msg = "Controller + Service Exmaple";
	$scope.add = function(msg) {
		msgService.add(msg);
	};
	$scope.get = function() {
		return msgService.get();
	};
	$scope.notify = function() {
		alert(msgService.get().join("\n"));
	};
	$scope.clear = function() {
		msgService.clear();
	}
};

function dirController($scope, msgService) {
	$scope.msg = "Custom Directive + Service Exmaple";
	$scope.setInfo = function(message) {
		msgService.setInfo(message);
	};
	$scope.setError = function(message) {
		msgService.setError(message);
	};
	$scope.setWarning = function(message) {
		msgService.setWarning(message);
	};
};