module.exports = function(gulp, plugins, config) {
  
    return gulp.task('uglify', function() {
        gulp.src(config.jsPath + '/*.js')
            .pipe(plugins.plumber({
                  errorHandler: plugins.notify.onError("ERROR: JS Minification Failed")
            }))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('./dist/js/'))
    });

};