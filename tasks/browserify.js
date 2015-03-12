module.exports = function(gulp, plugins, config) {
  
    gulp.task('browserify', function() {

        var bundler = plugins.browserify({debug: true});
        bundler.add(config.jsSrcPath + '/main.js');
        bundler.plugin('minifyify', {map: 'bundle.map.json', output: config.jsDistPath + './bundle.map.json'});

        return bundler
            .bundle()
            .pipe(plugins.vinylSourceStream('bundle.js'))
            .pipe(gulp.dest(config.jsDistPath));
    });

};