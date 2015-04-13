// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require bootstrap
//= require nga/nga/bower_components/angular/angular
//= require nga/nga/bower_components/angular-resource/angular-resource
//= require nga/nga/bower_components/angular-route/angular-route
//= require nga/nga/bower_components/angularresource/angular-resource
//= require nga/nga/bower_components/showdown/compressed/Showdown
//= require nga/nga/bower_components/codemirror/lib/codemirror
//= require nga/nga/bower_components/codemirror/addon/mode/overlay
//= require nga/nga/bower_components/codemirror/mode/gfm/gfm
//= require nga/nga/bower_components/codemirror/mode/markdown/markdown
//= require nga/nga/lib/angular-markdown-editor/angular-markdown-editor
//= require_tree nga/templates
//= require nga/nga/customer/customer
//= require nga/nga/newsletter/newsletter
//= require nga/nga/components/directives
//= require nga/nga/app
//= require_tree .
//= require_self




if (typeof jQuery !== 'undefined') {
    (function($) {
        $('#spinner').ajaxStart(function() {
            $(this).fadeIn();
        }).ajaxStop(function() {
            $(this).fadeOut();
        });
    })(jQuery);
}
