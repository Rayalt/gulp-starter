// ===============================================
// SCRIPTS TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function scripts() {
	return $.gulp.src($.projectPath.src.js, $.commonSettingsConfig.map)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.babel())
		.pipe($.webpack($.scriptConfig.webpack))
		.pipe($.gulp.dest($.projectPath.build.js, $.commonSettingsConfig.map));
}

// -----------------------------------------------
// TASK
