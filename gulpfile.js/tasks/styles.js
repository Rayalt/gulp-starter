// ===============================================
// STYLES TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function styles() {
	return $.gulp.src($.projectPath.src.scss, $.commonSettingsConfig.map)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.sassBulkImporter())
		.pipe($.sass())
		.pipe($.gp.autoprefixer($.stylesConfig.prefixer))
		.pipe($.gp.groupCssMediaQueries())
		.pipe($.gp.size($.commonSettingsConfig.size.before))
		.pipe($.gulp.dest($.projectPath.build.css, $.commonSettingsConfig.map))
		.pipe($.gp.cleanCss($.stylesConfig.clean))
		.pipe($.gp.rename($.commonSettingsConfig.min))
		.pipe($.gp.size($.commonSettingsConfig.size.after))
		.pipe($.gulp.dest($.projectPath.build.css, $.commonSettingsConfig.map));
}

// -----------------------------------------------
// TASK
