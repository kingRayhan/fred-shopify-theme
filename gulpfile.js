const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postCSS = require("gulp-postcss");
const babel = require("gulp-babel");

function jsTask() {
  return src("assets-src/js/theme.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(dest("assets"));
}

function sassTask() {
  return src("assets-src/styles/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(dest("assets"));
}

function postCSSTask() {
  return src("assets/*.css", { sourcemaps: true })
    .pipe(postCSS())
    .pipe(dest("assets"));
}

function watchTask() {
  watch("assets-src/styles/**/*.scss", series(sassTask, postCSSTask));
  watch("./**/*.liquid", series(sassTask, postCSSTask));
  watch("assets-src/js/**/*.js", jsTask);
}

const overallStyleTasks = series(sassTask, postCSSTask);
module.exports.default = series(overallStyleTasks, jsTask, watchTask);
