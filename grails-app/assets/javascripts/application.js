// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require bootstrap
//= require app/bower_components/angular/angular
//= require app/bower_components/angular-resource/angular-resource
//= require app/bower_components/angular-route/angular-route
//= require app/bower_components/angularresource/angular-resource
//= require app/bower_components/showdown/compressed/Showdown
//= require app/bower_components/codemirror/lib/codemirror
//= require app/bower_components/codemirror/addon/mode/overlay
//= require app/bower_components/codemirror/mode/gfm/gfm
//= require app/bower_components/codemirror/mode/markdown/markdown
//= require app/lib/angular-markdown-editor/angular-markdown-editor
//= require app/app
//= require app/customer/customer
//= require app/newsletter/newsletter
//= require app/components/directives
//= require app/app
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
