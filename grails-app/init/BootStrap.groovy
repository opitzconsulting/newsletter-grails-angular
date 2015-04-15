import newsletter.grails.Customer
import newsletter.grails.Markdown

class BootStrap {

    def init = { servletContext ->
        Customer.findOrSaveWhere(firstname: 'John', lastname: 'Doe')
        Customer.findOrSaveWhere(firstname: 'Oli', lastname: 'Wagner')
        Customer.findOrSaveWhere(firstname: 'Sarah', lastname: 'Schmitz')
        Markdown.findOrSaveWhere(text: '#Newsletter   * list element 1   * list element 2  ``This is a code block.`` > A blockquote   **This is bold**')
    }
    def destroy = {
    }
}
