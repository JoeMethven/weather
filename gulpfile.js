var gulp = require('gulp'), 
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');
    notify = require("gulp-notify") ,
    uglify = require('gulp-uglify');
    autoprefixer = require('gulp-autoprefixer'),
    autowatch = require('gulp-autowatch'),
    jade = require('gulp-jade'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat');

var config = {
    sassPath: 'assets/sass',
    cssPath:  'assets/css',
    nodeDir:  './node_modules'
}

// Add autoprefixer
gulp.task('autoprefixer', function () {
  return gulp.src('./assets/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(config.nodeDir + '/gulp-autoprefixer'));
});

gulp.task('js', function() {
  return gulp.src('assets/scripts/*.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('assets/scripts/min/'));
});

// Initialize BrowserSync & set base directory
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(config.sassPath + '/main.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(config.cssPath))
    .pipe(browserSync.stream());
});

// Compile Jade into Html
gulp.task('templates', function() {
  gulp.src('*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());

  gulp.src('assets/templates/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(browserSync.stream());

});

// Handlebars
gulp.task('handlebars', function(){
  gulp.src('assets/handlebars/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'app.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('assets/scripts/'));
});

// Static Server + Watching SASS/Html/Jade files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        notify: false
    });

    gulp.watch('./assets/templates/**/*.jade', ['templates']).on('change', browserSync.reload);
    gulp.watch('./**.jade', ['templates']);
    gulp.watch('./assets/sass/**', ['sass']).on('change', browserSync.reload);
    gulp.watch('./**.html').on('change', browserSync.reload);
    gulp.watch('./assets/scripts/**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch('./assets/scripts/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch('./assets/handlebars/**', ['handlebars']).on('change', browserSync.reload);
    gulp.watch('./assets/css/*.css', ['autoprefixer']).on('change', browserSync.reload);
});

  gulp.task('default', ['serve', 'templates', 'sass', 'handlebars', 'js']);
