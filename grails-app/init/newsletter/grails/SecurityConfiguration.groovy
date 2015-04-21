package newsletter.grails

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CsrfFilter
import org.springframework.security.web.csrf.CsrfTokenRepository
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository

@Configuration
@EnableWebSecurity
class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private static final String ANGULARJS_CSRF_TOKEN_NAME = "X-XSRF-TOKEN"

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user").password("pwd").roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                // catch all requests and require a user with the role 'USER'
                .antMatchers('/**').hasAnyRole('USER')
                .anyRequest().authenticated()
            .and()
                // provide a form login using a CSRF token
                .formLogin().permitAll()
            .and()
                // provide a logout url
                .logout().permitAll()
            .and()
                // register the CSRF filter to provide the token via cookie
                .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
                // register the Header Name to resolve the token from AngularJS calls
                .csrf().csrfTokenRepository(csrfTokenRepository());
    }

    CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName(ANGULARJS_CSRF_TOKEN_NAME);
        return repository;
    }

}