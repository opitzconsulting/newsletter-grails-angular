import newsletter.grails.Customer

class BootStrap {

    def init = { servletContext ->
    Customer.findOrSaveWhere(firstname: 'John', lastname: 'Doe', email: 'john.doe@mail.com', phone: '01577123456', address: 'Examplestreet 3, 73978 Berrignton')
    Customer.findOrSaveWhere(firstname: 'Oli', lastname: 'Wagner', email: 'oli@wagner.com', phone: '0173123456', address: 'Examplestreet 3, 73978 Berrignton')
    Customer.findOrSaveWhere(firstname: 'Sarah', lastname: 'Schmitz', email: 'sarahschm@company.com', phone: '015877123456', address: 'Examplestreet 3, 73978 Berrignton')
    }
    def destroy = {
    }
}
