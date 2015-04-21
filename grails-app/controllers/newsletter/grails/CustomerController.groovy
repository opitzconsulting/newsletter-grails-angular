package newsletter.grails

import grails.transaction.Transactional
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User;
import grails.converters.JSON

@Transactional(readOnly = true)
class CustomerController {

    def index() {
        session.currentUser = SecurityContextHolder.context.authentication.principal as User
        println "Currently logged in user: ${session.currentUser}"
        respond Customer.list(params), model:[customerCount: Customer.count()]
    }

    def show(Customer customer) {
        render(view: '/angular')
    }

    def create() {
        render(view: '/angular')
    }

    def sendmails() {
        session.recipients = params.checkMail.findAll {it.value}.keySet()
        redirect(url: "/newsletter")
    }
}
