module.exports = function(gulp, plugins) {
  
  gulp.task('map-reference', ['csscompile'], function(){
    return gulp.src('./dist/css/main.css')
    .pipe(plugins.insert.append('/*# sourceMappingURL=main.css.map */'))
    .pipe(gulp.dest('./dist/css'));
  });

};