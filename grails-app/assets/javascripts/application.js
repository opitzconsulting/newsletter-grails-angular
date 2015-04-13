// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require bootstrap
//= require nga/bower_components/angular/angular
//= require nga/bower_components/angular-resource/angular-resource
//= require nga/bower_components/angular-route/angular-route
//= require nga/bower_components/angularresource/angular-resource
//= require_tree nga/bower_components/showdown/compressed
//= require nga/bower_components/codemirror/lib/codemirror
//= require nga/bower_components/codemirror/addon/mode/overlay
//= require nga/bower_components/codemirror/mode/gfm/gfm
//= require nga/bower_components/codemirror/mode/markdown/markdown
//= require nga/lib/angular-markdown-editor/angular-markdown-editor
//= require_tree nga/templates
//= require nga/customer/customer
//= require nga/newsletter/newsletter
//= require nga/components/directives
//= require nga/app
//= require_tree .
//= require_self (1)

if (typeof jQuery !== 'undefined') {
    (function($) {
        $('#spinner').ajaxStart(function() {
            $(this).fadeIn();
        }).ajaxStop(function() {
            $(this).fadeOut();
        });
    })(jQuery);
}
