// ===============================================
// WATCH TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = watch = done => {
	$.gulp.watch(
		$.projectPath.watch.img,
		$.gulp.series($.task.img, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.json,
		$.gulp.series($.task.json, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.js,
		$.gulp.series($.task.scripts, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.pug,
		$.gulp.series($.task.pug2html, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.scss,
		$.gulp.series($.task.styles, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.svg,
		$.gulp.series($.task.svg, $.task.server.browserSyncReload)
	);
	$.gulp.watch(
		$.projectPath.watch.fonts,
		$.gulp.series($.task.fonts, $.task.server.browserSyncReload)
	);

	done();
}

// -----------------------------------------------
// TASK
