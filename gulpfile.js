var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');


gulp.task('clean-less',function(){
  return gulp.src('app/bld/public/css/*',{read:false})
      .pipe(clean());
})

gulp.task('less',['clean-less'],function() {
  // place code for your default task here
    return gulp.src('app/resources/assets/less/*.less')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'app/resources/assets/less', 'includes') ]
	    }))
	    .pipe(gulp.dest('app/bld/public/css'))
	    .pipe(livereload());
});

gulp.task('clean-views',function(){
	return gulp.src('app/bld/resources/views/*',{read:false})
			.pipe(clean());
})

gulp.task('resources',['clean-views'],function(){
	 return gulp.src("app/resources/views/*")
      .pipe(gulp.dest('app/bld/resources/views'))
      .pipe(livereload());
})

gulp.task('clean-dist',function(){
	return gulp.src('app/bld/resources/assets/dist/*',{read:false})
			.pipe(clean());
})

gulp.task('assets',['clean-dist'],function(){
	 return gulp.src("app/resources/assets/dist/*")
      .pipe(gulp.dest('app/bld/resources/assets/dist'))
      .pipe(livereload());
})

gulp.task('watch', function() {
   //gulp.watch('./less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
    gulp.watch('app/resources/views/*', ['default']);
    gulp.watch('app/resources/assets/dist/*', ['default']);
    gulp.watch('app/resources/assets/less/*.less', ['default']);
});


gulp.task('default', ['resources','assets','less']); // Default will run the 'entry' watch task

