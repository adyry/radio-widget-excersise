var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var haml = require('gulp-ruby-haml');

gulp.task('serve', ['haml','sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("haml/**/*.haml", ['haml']);
    gulp.watch("./**/*.*").on('change', browserSync.reload);
});

gulp.task('haml', function() {
  return gulp.src("haml/**/*.haml")
      .pipe(haml().on('error', function(err) { console.log(err.message); }))
      .pipe(gulp.dest('.'))
      .pipe(browserSync.stream());
})

gulp.task('sass', function() {
    return gulp.src("sass/**/*.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false
      }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
