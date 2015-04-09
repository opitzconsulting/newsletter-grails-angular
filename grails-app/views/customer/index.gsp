<!DOCTYPE html>
<html>
    <head>
        <meta name="layout" content="main">
        <g:set var="entityName" value="${message(code: 'customer.label', default: 'Customer')}" />
        <title><g:message code="default.list.label" args="[entityName]" /></title>
    </head>
    <body>
        <a href="#list-customer" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
        <div class="nav" role="navigation">
            <ul>
                <li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
            </ul>
        </div>
        <div id="list-customer" class="content scaffold-list" role="main">
            <h1><g:message code="default.list.label" args="[entityName]" /></h1>
            <g:if test="${flash.message}">
                <div class="message" role="status">${flash.message}</div>
            </g:if>
            <%--<f:table collection="${customerList}" />--%>
            <g:form controller="customer" action="sendmails">
                <table>
                    <thead>
                        <tr>
                            <th />
                            <g:sortableColumn property="lastname" title="${message(code: 'customer.lastname.label', default: 'Lastname')}" />
                            <g:sortableColumn property="firstname" title="${message(code: 'customer.firstname.label', default: 'Firstname')}" />
                            <g:sortableColumn property="address" title="${message(code: 'customer.address.label', default: 'Address')}" />
                            <g:sortableColumn property="email" title="${message(code: 'customer.email.label', default: 'Email')}" />
                            <g:sortableColumn property="phone" title="${message(code: 'customer.phone.label', default: 'Phone')}" />
                        </tr>
                    </thead>
                    <tbody>
                        <g:each in="${customerList}" status="i" var="customerInstance">
                            <tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
                                <td><g:checkBox name="checkMail.${customerInstance.id}" value="${true}" checked="" /></td>
                                <td><g:link action="show" id="${customerInstance.id}">${fieldValue(bean: customerInstance, field: "lastname")}</g:link></td>
                                <td>${fieldValue(bean: customerInstance, field: "firstname")}</td>
                                <td>${fieldValue(bean: customerInstance, field: "address")}</td>
                                <td>${fieldValue(bean: customerInstance, field: "email")}</td>
                                <td>${fieldValue(bean: customerInstance, field: "phone")}</td>
                            </tr>
                        </g:each>
                    </tbody>
                </table>
                <%--<div class="pagination">
                    <g:paginate total="${customerCount ?: 0}" />
                </div>--%>
                <fieldset class="buttons">
                    <g:submitButton class="edit" name="show" value="Send mails" />
                </fieldset>
            </g:form>
        </div>
    </body>
</html>