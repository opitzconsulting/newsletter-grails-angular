class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: 'Customer', action: 'index')
        "/newsletter"(view: "/newsletter")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
