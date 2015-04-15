package newsletter.grails

import grails.transaction.Transactional
import grails.converters.JSON

@Transactional(readOnly = true)
class ApiController {

    def customer(Long id) {
        switch(request.method) {
            case "GET":
                if (id)
                    render Customer.get(id) as JSON
                else
                    render Customer.list() as JSON
                break
            case "POST":
                def customer = new Customer(request.JSON)
                if (customer.validate() && customer.save()) {
                    response.status = 201
                    render customer as JSON
                } else {
                    error(403, "Invalid data")
                }
                break
            case "PUT":
                def customer = Customer.get(request.JSON.id)
                if (!customer) {
                    error(404, "Customer with id ${request?.JSON?.id} not found!")
                } else {
                    customer.properties = request.JSON
                    customer.save()
                    render customer as JSON
                }
                break
         }
    }

    def loggedUser() {
        render(session.loggedUser as JSON)
    }

    def recipients() {
        def result = [security: session.loggedUser, customers: session.recipients.collect {Customer.read(it)}] as JSON
        render result
    }

    private void error(int code, String message) {
        response.status = code
        render([error: message] as JSON)
    }
}
