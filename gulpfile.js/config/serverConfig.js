// ===============================================
// BROWSERSYNC SERVER CONFIG
// ===============================================


// DATA
// -----------------------------------------------

module.exports = serverConfig = {
	server: {
		baseDir: './build'
	},

	port: 3002,

	host: 'localhost',
	startPath: 'index.html',
	open: false,
	notify: false,
	logPrefix: 'New project',
	reloadOnRestart: true,
};

// -----------------------------------------------
// DATA
