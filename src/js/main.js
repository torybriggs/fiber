(function() {
    'use strict';

    var querySelector = document.querySelector.bind(document);
    var htmlElement = document.querySelector('html');

    htmlElement.className = htmlElement.className.replace(/\bno-js\b/,'') + 'js';

    var example = require('./plugin');

    example('Hello World');

})();