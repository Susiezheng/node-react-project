/***
 **gulpfile.js 将deploy文件的内容打包生成zip
 ***/
var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var zip = require('gulp-zip');
//文件目录配置
var Config = {
	src: ["./deploy/**/*", "./version.txt"], //生成zip文件夹
	dest: "./", //zip产物文件夹
	delete_src: ["./deploy.zip"], //删除zip文件
};
/***
 **开始构建
 */
gulp.task('default', function(callback) {
	runSequence(
		'clean',
		'archive_zip',
		function(error) {
			if (error) {
				console.log(error.message);
			} else {
				console.log("release finished successfully.");
			}
			callback && callback(error);
		}
	)
});
/***
 **删除zip文件
 ***/
gulp.task('clean', function() {
	return gulp.src(Config.delete_src)
		.pipe(gulp.dest(Config.dest))
		.pipe(vinylPaths(del));
});
//打包tar.gz
gulp.task('archive_zip', function() {
	return gulp.src(Config.src)
		.pipe(tar("deploy.tar"))
		.pipe(gzip())
		.pipe(gulp.dest(Config.dest));
});
