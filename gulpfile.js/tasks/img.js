// ===============================================
// IMG TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function img() {
	return $.gulp.src($.projectPath.src.img)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.newer($.projectPath.build.img))
		.pipe($.gp.webp())
		.pipe($.gulp.dest($.projectPath.build.img))
		.pipe($.gulp.src($.projectPath.src.img))
		.pipe($.gp.newer($.projectPath.build.img))
		.pipe($.gp.imagemin($.imgConfig.minifyImg,
				[
					$.jpegRecompress($.imgConfig.recompress),
					$.gp.imagemin.gifsicle(),
					$.gp.imagemin.optipng(),
					$.gp.imagemin.svgo()
				]
			)
		)
		.pipe($.gulp.dest($.projectPath.build.img))
}

// TODO: при удалении картинок пересобирать проект

// -----------------------------------------------
// TASK
