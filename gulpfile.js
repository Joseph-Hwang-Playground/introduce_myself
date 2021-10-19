const gulp = require("gulp");
const cssimport = require('gulp-cssimport');

const process = (filename) => () => {
    const postCSS = require("gulp-postcss");
    const sass = require("gulp-sass")(require("node-sass"));
    const minify = require("gulp-csso");
    return gulp
        .src(filename ? `styles/${filename}.css` : 'styles/**/*')
        .pipe(cssimport())
        .pipe(sass().on("error", sass.logError))
        .pipe(postCSS([
            require("autoprefixer"),
        ]))
        .pipe(minify())
        .pipe(gulp.dest("res/css"));
};


gulp.task('css', gulp.parallel([process('main'), process('fonts'), process('globals')]));

const watch = () => gulp.watch('styles/*.css', gulp.series(['css']));
gulp.task('watch', watch);

gulp.task('dev', gulp.series(['css', 'watch']))

gulp.task('build', gulp.series(['css']))
