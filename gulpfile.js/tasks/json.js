// ===============================================
// JSON TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = function buildJson() {
	return $.gulp.src($.projectPath.src.json)
		.pipe($.gp.plumber())
		.pipe($.gp.jsonConcat($.jsonConfig.fileName, function(data) {
			return new Buffer.from(JSON.stringify(data));
		}))
		.pipe($.gulp.dest($.projectPath.build.json));
}

// -----------------------------------------------
// TASK
