<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<spring:url value="/resources/js/plugins/angular.js" var="angularJs" />
<spring:url value="/resources/js/hello.js" var="helloJs" />
<spring:url value="/resources/css/style.css" var="styleCss" />
<script type="text/javascript" src="${angularJs}"></script>
<script type="text/javascript" src="${helloJs}"></script>
<link rel="stylesheet" type="text/css" href="${styleCss}">
<title>hello</title>
</head>

<body ng-app="app">
	<div ng-controller="helloController">
		<h2>{{message}}</h2>
	</div>
</body>
</html>