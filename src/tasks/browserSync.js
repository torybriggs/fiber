module.exports = function(gulp, plugins) {
  
    gulp.task('browser-sync', function() {
        plugins.browserSync({
            server: {
                baseDir: "./dist/",
                middleware: function (req, res, next) {
                    req.url = req.url.replace(/\/([^\/]+)\.[0-9a-f]+\.(css|js|jpg|png|gif|svg)$/, "/$1.$2");
                    next();
                }
            }
        });
    });

};