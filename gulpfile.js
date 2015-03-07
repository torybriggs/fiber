var gulp = require('gulp');
var config = require('./config.json');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', 'browser-sync', 'run-sequence'] 
});

// BrowserSync Reload
require('./tasks/reload')(gulp, plugins);

// File Cleanup
require('./tasks/clean')(gulp, plugins);

 // SASS Compilation
require('./tasks/csscompile')(gulp, plugins, config);

 // JS Minification
require('./tasks/uglify')(gulp, plugins, config);

// Image Minifications
require('./tasks/imagemin')(gulp, plugins, config);

// Cachebust CSS
require('./tasks/cachebust')(gulp, plugins);

// Sourcemap Reference
require('./tasks/mapReference')(gulp, plugins);

// Basic Server
require('./tasks/browserSync')(gulp, plugins);

// CSS Build
require('./tasks/cssBuild')(gulp, plugins);

// Watch For Changes
require('./tasks/watch')(gulp, plugins, config);

// Default Task Triggers Watch
gulp.task('default', function() {
    gulp.start('browser-sync', 'watch');
});