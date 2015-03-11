module.exports = function(gulp, plugins) {
  
    gulp.task('browserify', function() {

        var bundler = plugins.browserify({debug: true});
        bundler.add('./src/js/main.js');
        bundler.plugin('minifyify', {map: 'bundle.map.json', output: './dist/js/bundle.map.json'});

        return bundler
            .bundle()
            .pipe(plugins.vinylSourceStream('bundle.js'))
            .pipe(gulp.dest('./dist/js/'));
    });

};