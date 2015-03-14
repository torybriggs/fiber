var gulp = require('gulp');
var config = require('./src/tasks/config.json');

var plugins = require('gulp-load-plugins')({
  pattern: ['*'] 
});

// BrowserSync Reload
require('./src/tasks/reload')(gulp, plugins);

// File Cleanup CSS
require('./src/tasks/cleanCss')(gulp, plugins, config);

// File Cleanup JS
require('./src/tasks/cleanJs')(gulp, plugins, config);

 // SASS Compilation
require('./src/tasks/csscompile')(gulp, plugins, config);

 // JS Bundling
require('./src/tasks/browserify')(gulp, plugins, config);

// Image Minifications
require('./src/tasks/imagemin')(gulp, plugins, config);

// Cachebust CSS
require('./src/tasks/cachebust')(gulp, plugins);

// Sourcemap Reference
require('./src/tasks/mapReference')(gulp, plugins);

// Basic Server
require('./src/tasks/browserSync')(gulp, plugins);

// CSS Build
require('./src/tasks/cssBuild')(gulp, plugins);

// CSS Build
require('./src/tasks/jsBuild')(gulp, plugins);

// Watch For Changes
require('./src/tasks/watch')(gulp, plugins, config);

// Default Task Triggers Watch
gulp.task('default', function() {
    gulp.start('browser-sync', 'watch');
});