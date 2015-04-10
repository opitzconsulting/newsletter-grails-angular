package newsletter.grails

import grails.transaction.Transactional
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User;
import grails.converters.JSON

@Transactional(readOnly = true)
class CustomerController {

    def index(Long id) {
        if (id) {
            render(view: "/index")
        } else
            redirect(action: "list")
    }

    def list() {
        respond Customer.list(params), model:[customerCount: Customer.count()]
    }

    def sendmails() {
        session.loggedUsername = (SecurityContextHolder.context.authentication.principal as User).username
        session.recipients = params.checkMail.findAll {it.value}.keySet()
        render ([session.recipients, session.loggedUsername])
        //TODO: route to Angular-Sendmails
    }
}
