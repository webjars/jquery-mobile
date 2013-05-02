/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        "jquery.mobile": [ 'webjars!jquery.js' ]
    }
});
