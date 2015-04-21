import newsletter.grails.Customer
import newsletter.grails.Markdown

class BootStrap {

    def init = { servletContext ->
    Customer.findOrSaveWhere(firstname: 'John', lastname: 'Doe', email: 'john.doe@mail.com', phone: '01577123456', address: 'Examplestreet 3, 73978 Berrignton')
    Customer.findOrSaveWhere(firstname: 'Oli', lastname: 'Wagner', email: 'oli@wagner.com', phone: '0173123456', address: 'Examplestreet 3, 73978 Berrignton')
    Customer.findOrSaveWhere(firstname: 'Sarah', lastname: 'Schmitz', email: 'sarahschm@company.com', phone: '015877123456', address: 'Examplestreet 3, 73978 Berrignton') 
    Markdown.findOrSaveWhere(markdown: '#Newsletter\n* list element 1\n* list element 2\n\n``This is a code block.``\n\n> A blockquote\n\n**This is bold**\n\nAnd here we have some plain and simple text block.')
    }
    def destroy = {
    }
}
