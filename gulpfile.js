var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var BUILD_DIR = 'build/';

function compile() {
    var bundler = browserify('app/index.js');

    return bundler
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(BUILD_DIR));
}

gulp.task('build:js', function () {
    return compile();
})
gulp.task('build:html', function() {
    return gulp.src('app/**/*.html', '!node_modules/**/*')
      .pipe(gulp.dest(BUILD_DIR));
  })
  
  gulp.task('build', ['build:js', 'build:html']);