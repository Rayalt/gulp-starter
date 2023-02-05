// ===============================================
// SCRIPTS CONFIG
// ===============================================


// SRC PATH
// -----------------------------------------------

const commonSettingsConfig = require('./commonSettingsConfig');

// -----------------------------------------------
// SRC PATH



// DATA
// -----------------------------------------------

module.exports = scriptsConfig = {
	scriptName: 'main.js',

	webpack: {
		mode: commonSettingsConfig.isProd ? 'production' : 'development',

		stats: {
			children: false,
		},
	},
};

// -----------------------------------------------
// DATA

