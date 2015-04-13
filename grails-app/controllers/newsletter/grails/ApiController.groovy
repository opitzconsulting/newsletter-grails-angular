package newsletter.grails

import grails.transaction.Transactional
import grails.converters.JSON

@Transactional(readOnly = true)
class ApiController {

    def customer(Long id) {
        render(Customer.read(id) as JSON)
    }

    def user() {
        render(session.loggedUser as JSON)
    }

    def recipients() {
        def result = [security: session.loggedUser, customers: session.recipients.collect {Customer.read(it)}] as JSON
        render result
    }
}
