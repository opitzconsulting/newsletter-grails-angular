package newsletter.grails

class Customer {

	String firstname
	String lastname
	String address
	String email
	String phone

    static constraints = {
    	address nullable: true
    	email nullable: true
    	phone nullable: true
    }
}
