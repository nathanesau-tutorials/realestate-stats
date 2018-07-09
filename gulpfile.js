const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('webpack', function(){
    gulp.src('src/jsx/index.jsx')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/js'))
});

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    gulp.src('src/scss/main.scss')
        .pipe(sass({ includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets'] }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['sass','webpack','copyHtml']
);

// default task
gulp.task('default', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/jsx/*.jsx', ['webpack']);
    gulp.watch('./src/*.html', ['copyHtml']);
});