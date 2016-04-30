<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Messages</title>
<spring:url value="/resources/js/plugins/angular.js" var="angularJs" />
<spring:url value="/resources/js/messages.js" var="messagesJs" />
<spring:url value="/resources/css/style.css" var="styleCss" />
<script type="text/javascript" src="${angularJs}"></script>
<script type="text/javascript" src="${messagesJs}"></script>
<link type="text/css" rel="stylesheet" href="${styleCss}">
</head>
<body ng-app="msgApp">

	<div ng-controller="msgAppController">

		<h3>{{msg}}</h3>

		<div>
			<input type="text" ng-init="message=''" ng-model="message" placeholder="Enter your message here!"
				size="30" /> <input type="button" value="Info" ng-click="setInfo(message)" /> <input
				type="button" value="Error" ng-click="setError(message)" /> <input type="button" value="Warn"
				ng-click="setWarn(message)" />
		</div>

		<div>
			<div info></div>
			<div warn></div>
			<div error></div>
		</div>
	</div>

</body>
</html>