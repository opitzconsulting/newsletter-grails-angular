package newsletter.grails

import grails.rest.Resource

@Resource(uri='/api/markdown', formats = ['json'])
class Markdown {

    String text

    static constraints = {
    }
}
