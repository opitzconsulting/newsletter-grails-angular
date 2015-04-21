package newsletter.grails

import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository

class CsrfTokenTagLib {

    static defaultEncodeAs = [taglib:'text']

    def csrfToken = {
        def attrs = ["name": "_csrf", "value": new HttpSessionCsrfTokenRepository().loadToken(request).token]
        out << g.hiddenField(attrs)
    }

}
