// ===============================================
// BUILD PROJECT
// ===============================================


// GLOBAL PLUGINS AND CONFIGS
// -----------------------------------------------
global.$ = {
	// Common Plugins
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	task: require('require-dir')('./tasks', {recurse: true}),


	// Other plugins
	fs: require('fs-extra'),
	jpegRecompress: require('imagemin-jpeg-recompress'),
	gulpif: require('gulp-if'),
	webpack: require('webpack-stream'),
	sass: require('gulp-sass')(require('sass')),

	// Configs
	commonSettingsConfig: require('./config/commonSettingsConfig'),
	consoleColors: require('./config/consoleColors'),
	errors: require('./config/errors'),
	fontsConfig: require('./config/fontsConfig'),
	getBrowsersyncInstance: require('./config/getBrowsersyncInstance'),
	imgConfig: require('./config/imgConfig'),
	jsonConfig: require('./config/jsonConfig'),
	projectPath: require('./config/projectPath'),
	pug2htmlConfig: require('./config/pug2htmlConfig'),
	scriptConfig: require('./config/scriptConfig'),
	serverConfig: require('./config/serverConfig'),
	stylesConfig: require('./config/stylesConfig'),
	svgConfig: require('./config/svgConfig'),
}

// -----------------------------------------------
// GLOBAL PLUGINS AND CONFIGS


// DEVELOPMENT
// -----------------------------------------------

module.exports.img = $.gulp.parallel (
	$.task.img, $.task.svg
);

module.exports.json = $.task.json;

const dev = $.gulp.series (
	$.task.clean,
	$.task.json,
	$.gulp.parallel(
		$.task.img,
		$.task.svg,
		$.task.fonts,
		$.task.scripts,
		$.task.pug2html,
		$.task.styles,
	),
	$.gulp.parallel(
		$.task.watch,
		$.task.server.browserSyncServer,
	),
);

const build = $.gulp.series (
	$.task.clean,
	$.task.json,
	$.gulp.parallel($.task.img, $.task.svg, $.task.fonts),
	$.gulp.parallel($.task.scripts, $.task.pug2html, $.task.styles),
);

// -----------------------------------------------
// DEVELOPMENT


// EXPORT TASKS
// -----------------------------------------------

module.exports.html = $.task.pug2html;
module.exports.styles = $.task.styles;
module.exports.svg = $.task.svg;
module.exports.scripts = $.task.scripts;
module.exports.img = $.task.img;
module.exports.json = $.task.json;
module.exports.fonts = $.task.fonts;
module.exports.clean = $.task.clean;

module.exports.default = $.commonSettingsConfig.isProd ? build : dev;

// -----------------------------------------------
// EXPORT TASKS
