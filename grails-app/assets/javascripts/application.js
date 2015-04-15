// This is a manifest file that'll be compiled intoapplication.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to addapplication-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require bootstrap
//= require angular-app/app/bower_components/angular/angular
//= require angular-app/app/bower_components/angular-resource/angular-resource
//= require angular-app/app/bower_components/angular-route/angular-route
//= require angular-app/app/bower_components/angularresource/angular-resource
//= require angular-app/app/bower_components/showdown/compressed/Showdown
//= require angular-app/app/bower_components/codemirror/lib/codemirror
//= require angular-app/app/bower_components/codemirror/addon/mode/overlay
//= require angular-app/app/bower_components/codemirror/mode/gfm/gfm
//= require angular-app/app/bower_components/codemirror/mode/markdown/markdown
//= require angular-app/app/lib/angular-markdown-editor/angular-markdown-editor
//= require angular-app/app/app
//= require_tree angular-app/app/templates
//= require angular-app/app/customer/customer
//= require angular-app/app/newsletter/newsletter
//= require angular-app/app/components/directives
//= require angular-app/app/components/username
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
