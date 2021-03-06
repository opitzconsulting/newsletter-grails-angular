<%@ page import="org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository" %>
<!DOCTYPE html>
<html>
    <head>
        <meta name="layout" content="kickstart">
        <title><g:message code="customer.list.title" /></title>
    </head>
    <body>
        <section id="list-customer" class="content scaffold-list first" role="main">
            <h2><g:message code="customer.list.title" /></h2>
            <g:if test="${flash.message}">
                <div class="message" role="status">${flash.message}</div>
            </g:if>
            <%--<f:table collection="${customerList}" />--%>
            <g:form controller="customer" action="sendmails">
                <table class="table table-bordered margin-top-medium">
                    <thead>
                        <tr>
                            <th><g:message code="customer.mailto.label" /></th>
                            <g:sortableColumn property="lastname" title="${message(code: 'customer.lastname.label')}" />
                            <g:sortableColumn property="firstname" title="${message(code: 'customer.firstname.label')}" />
                            <g:sortableColumn property="address" title="${message(code: 'customer.address.label')}" />
                            <g:sortableColumn property="email" title="${message(code: 'customer.email.label')}" />
                            <g:sortableColumn property="phone" title="${message(code: 'customer.phone.label')}" />
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
                    <g:csrfToken />
                    <g:submitButton class="btn btn-default" name="show" value="Create Mailing" />
                    <g:link class="btn btn-default" controller="customer" action="create">Add Recipient</g:link>
                </fieldset>
            </g:form>
        </section>
    </body>
</html>