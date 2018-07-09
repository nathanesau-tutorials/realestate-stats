const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

/*
gulp.task('webpack', function(){
    webpack()
});
*/

gulp.task('webpack', function(){
    gulp.src('src/js/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', function(){
    gulp.watch('./src/js/*.js', ['webpack']);
    gulp.watch('./src/*.html', ['copyHtml']);
});