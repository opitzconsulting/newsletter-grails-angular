<!DOCTYPE html>
<html lang="en" ng-app="angularApp.app">

<head>
	<title><g:layoutTitle default="${meta(name:'app.name')}" /></title>
	
    <meta charset="utf-8">
    <meta name="viewport"		content="width=device-width, initial-scale=1.0">
    
	<link rel="shortcut icon"		href="${resource(dir:'images',file:'favicon.ico')}" type="image/x-icon" />
	
	<asset:stylesheet src="application.css"/>
    <asset:javascript src="application.js"/>

	<g:layoutHead />
</head>

<body>
	<g:render template="/layouts/header"/>														
	<g:render template="/layouts/content"/>														
</body>

</html>