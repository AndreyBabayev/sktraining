const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
function browsersync() {
    browserSync.init({
    server: { baseDir:'app/' },
    notify: false,
    online: true
    })
   }
// Подключаем модули gulp-sass
const sass = require('gulp-sass');
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
// Подключаем gulp-imagemin для работы с изображениями
const imagemin = require('gulp-imagemin');
// Подключаем модуль gulp-newer
const newer = require('gulp-newer');
// Подключаем модуль del
const del = require('del');
   function startWatch() {
   watch('app/**/*.scss', styles);
   watch('app/**/*.html').on('change',browserSync.reload);
   watch('app/images/src/**/*', images);
  }
  function styles() {
   return src('app/' + 'scss' + '/style.' + 'scss' + '')
   .pipe(sass())
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
   .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
   .pipe(dest('app/css/'))
   .pipe(browserSync.stream())
  }
  function images() {
   return src('app/images/src/**/*')
  .pipe(newer('app/images/dest/'))
  .pipe(imagemin())
  .pipe(dest('app/images/dest/'))
}
   function cleanimg() {
   return del('app/images/dest/**/*', { force: true })
   }
   function cleandist() {
      return del('dist/**/*', { force: true })
      }
   function buildcopy() {
      return src([ 
         'app/css/**/*.min.css',
         'app/images/dest/**/*',
         'app/**/*.html',
         ], {base: 'app' })
         .pipe(dest('dist'))
      }
   exports.cleanimg = cleanimg;
   exports.images = images;
   exports.styles = styles;
   exports.browsersync = browsersync;
   exports.cleandist = cleandist;
   
   exports.default = series(browsersync, startWatch);
   exports.build = series (cleanimg, styles, images, buildcopy);
 
