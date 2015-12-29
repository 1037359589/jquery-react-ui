var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var jquery=require('gulp-jquery');
var rename=require('gulp-rename');
var minCss=require('gulp-minify-css');

gulp.task('jquery-ui-js',function(){
	return gulp.src('./js/jquery-ui/*.js')
			// .pipe(jquery())
			.pipe(concat('jquery-own-ui.js'))
			.pipe(gulp.dest('./dest/jquery-ui'))
			.pipe(rename({suffix:'.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('./dest/jquery-ui'));
});
gulp.task('jquery-ui-css',function(){
	return gulp.src('./css/jquery-ui/*.css')
			// .pipe(jquery())
			.pipe(concat('jquery-own-ui.css'))
			.pipe(gulp.dest('./dest/jquery-ui'))
			.pipe(rename({suffix:'.min'}))
			.pipe(minCss())
			.pipe(gulp.dest('./dest/jquery-ui'));
});
gulp.task('default',['jquery-ui-css'],function(){
	gulp.watch('./js/jquery-ui/*.js',['jquery-ui-js']).on('change',function(e){
		console.log('File'+e.path+'was'+e.type+'runing tasks...');
	});
	gulp.watch('./css/jquery-ui/*.css',['jquery-ui-css']).on('change',function(e){
		console.log('File'+e.path+'was'+e.type+'runing tasks...');
	})
	console.log('压缩合并完成！！');
});
