import newsletter.grails.Customer

class BootStrap {

    def init = { servletContext ->
    Customer.findOrSaveWhere(firstname: 'John', lastname: 'Doe')
    Customer.findOrSaveWhere(firstname: 'Oli', lastname: 'Wagner')
    Customer.findOrSaveWhere(firstname: 'Sarah', lastname: 'Schmitz')
    }
    def destroy = {
    }
}
