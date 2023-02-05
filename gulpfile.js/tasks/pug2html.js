// ===============================================
// PUG TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function pug2html() {
	return $.gulp.src($.projectPath.src.pug)
		.pipe($.gp.plumber($.errors.errorNotify))
		.pipe($.gp.debug($.pug2htmlConfig.debug))
		.pipe(
			$.jsonConfig.jsonInclude
			? $.gp.pug({
				locals: JSON.parse($.fs.readFileSync($.jsonConfig.json))
			})
			: $.gp.pug()
		)
		.pipe($.gp.webpHtml())
		.pipe($.gulpif($.pug2htmlConfig.htmlPretty, $.gp.prettyHtml($.pug2htmlConfig.prettyOptions)))
		.pipe($.gulp.dest($.projectPath.build.html))
}

// -----------------------------------------------
// TASK
