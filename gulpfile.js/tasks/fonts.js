// ===============================================
// FONTS TASK
// ===============================================


// TASK
// -----------------------------------------------

// плагин вместо gulp-fonter, gulp-fonter на маке срёт в корень build копиями файлов с виндовыми путями

module.exports = function fonts() {
	return $.gulp.src($.projectPath.src.fonts)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.newer($.projectPath.build.fonts))
		.pipe($.gp.fonterUnx($.fontsConfig.fonter))
		.pipe($.gulp.dest($.projectPath.build.fonts))
		.pipe($.gp.ttf2woff2())
		.pipe($.gulp.dest($.projectPath.build.fonts))
}

// -----------------------------------------------
// TASK
