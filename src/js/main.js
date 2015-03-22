(function() {

    'use strict';
    
    var $ = require('jquery');
    var Modernizr = require('modernizr');
    var example = require('./plugin');

    var querySelector = document.querySelector.bind(document);
    var htmlElement = document.querySelector('html');

    htmlElement.className = htmlElement.className.replace(/\bno-js\b/,'') + 'js';

    example('Hello World');

})();