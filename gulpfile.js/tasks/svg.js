// ===============================================
// SVG TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function svgSprite() {
	return $.gulp.src($.projectPath.src.svg)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.newer($.projectPath.build.img + $.svgConfig.spriteName))
		.pipe($.gp.svgmin($.svgConfig.svgMin))
		.pipe($.gp.svgstore($.svgConfig.svgStore))
		.pipe($.gp.cheerio($.svgConfig.cheerio))
		.pipe($.gp.rename($.svgConfig.spriteName))
		.pipe($.gulp.dest($.projectPath.build.img));
}

// -----------------------------------------------
// TASK
