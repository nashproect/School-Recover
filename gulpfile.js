const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');

gulp.task('watch', function (done) {
    watch('./scss/*.scss').on('change', (e) => {
        gulp.src('./scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
    });

    done();
});


gulp.task('default', gulp.series(gulp.parallel('watch')));


gulp.task('build', function (done) {
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./css'));

    done();
});
