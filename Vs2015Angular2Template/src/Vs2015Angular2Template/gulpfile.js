/// <binding Clean='clean' AfterBuild='moveHTMLToWwwRoot, moveJSToLibs' />
var gulp = require('gulp');
var clean = require('gulp-clean');
var destPath = './wwwroot/libs';

// Delete the dist directory
gulp.task('clean', function () {
    gulp.src('./wwwroot/appScripts', { read: false })
        .pipe(clean());

    return gulp.src('./wwwroot/libs', { read: false })
        .pipe(clean());
});

gulp.task('moveJSToLibs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/rxjs/**'
    ]).pipe(gulp.dest('./wwwroot/libs/rxjs'));


    //gulp.src([
    //  'node_modules/bootstrap/dist/css/bootstrap.css',
    //  'node_modules/dragula/dist/dragula.min.css'
    //]).pipe(gulp.dest('./wwwroot/libs/css'));
});


gulp.task('moveHTMLToWwwRoot', function () {

    gulp.src('./scripts/**/*.html')
      .pipe(gulp.dest('./wwwroot/appScripts'));

    //  gulp.src('./scripts/modules/**/*.html')
    //    .pipe(gulp.dest('./wwwroot/appScripts/modules'));

    //  gulp.src('./scripts/shared/**/*.html')
    //.pipe(gulp.dest('./wwwroot/appScripts/shared'));

});