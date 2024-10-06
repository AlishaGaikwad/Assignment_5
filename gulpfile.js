const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Use Dart Sass

function css() {
  return src('src/*.scss')
    .pipe(sass().on('error', sass.logError))  // Compile Sass with Dart Sass
    .pipe(dest('dist/css'));  // Output to the dist/css folder
}

exports.default = function () {
  watch('src/*.scss', css);  // Watch for changes in .scss files
};
