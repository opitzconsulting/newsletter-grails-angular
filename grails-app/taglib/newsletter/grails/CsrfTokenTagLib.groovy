package newsletter.grails

import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository

/**
 * Provide a tag that can be used to send the CSRF token inside a form as a hidden field.
 */
class CsrfTokenTagLib {

    static defaultEncodeAs = [taglib:'text']

    def csrfToken = {
        def attrs = ["name": "_csrf", "value": new HttpSessionCsrfTokenRepository().loadToken(request).token]
        out << g.hiddenField(attrs)
    }

}
