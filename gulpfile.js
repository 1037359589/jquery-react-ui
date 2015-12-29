var gulp=require('gulp');
var react=require('gulp-react');
var babel=require('gulp-babel');
var less=require('gulp-less');
var browserify=require('gulp-browserify');
// var sass=require('gulp-sass');



gulp.task('less',function(){
	return gulp.src('./src/css1.less')
			.pipe(less())
			.pipe(gulp.dest('./dest'))
});
gulp.task('browserify',function(){
	return gulp.src('./src/browserify.js')
			.pipe(browserify())
			.pipe(gulp.dest('./build'))
});
gulp.task('default',['less','browserify'],function(){
	return gulp.src('./src/main.js')
		   .pipe(react())
		   .pipe(babel({
		   	presets:['babel-preset-es2015']
		   }))
		   .pipe(gulp.dest('./dest'))
});