<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>AngService</title>
<spring:url value="/resources/js/plugins/angular.js" var="angularJs" />
<spring:url value="/resources/js/page2.js" var="page2Js" />
<spring:url value="/resources/css/style.css" var="styleCss" />
<script type="text/javascript" src="${angularJs}"></script>
<script type="text/javascript" src="${page2Js}"></script>
<link type="text/css" rel="stylesheet" href="${styleCss}" />
</head>





<body ng-app="myApp">
	<div ng-controller="myController">
		<h3>{{msg}}</h3>
		<div>
			<input type="text" ng-init="message=''" ng-model="message" placeholder="Enter your message here." />
			<input type="button" value="Add Message" ng-click="add(message)" /> <input type="button"
				value="Notify" ng-click="notify()" /> <input type="button" value="Clear" ng-click="clear()" />
		</div>
		<div>
			<div ng-repeat="msg in get() track by $index">{{msg}}</div>
		</div>
	</div>

	<div ng-controller="dirController">
		<h3>{{msg}}</h3>
		<div>
			<input type='text' ng-init="message=''" ng-model="message" placeholder="Enter your message here." />
			<input type="button" value="Info" ng-click="setInfo(message)" /> <input type="button"
				value="Error" ng-click="setError(message)" /> <input type="button" value="Warning"
				ng-click="setWarning(message)" />
		</div>
		<div>
			<dir info></dir>
			<dir error></dir>
			<dir warn></dir>
		</div>
	</div>
</body>

</html>