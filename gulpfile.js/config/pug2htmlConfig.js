// ===============================================
// PUG2HTML CONFIG
// ===============================================


// SRC PATH
// -----------------------------------------------

const commonSettingsConfig = require('./commonSettingsConfig');

// -----------------------------------------------
// SRC PATH


// DATA
// -----------------------------------------------

module.exports = pug2HtmlConfig = {
	prettyOptions: {
		indent_size: 4,
		indent_char: ' ',
		indent_with_tabs: '-s',
		indent_inner_html: true,
		extra_liners: ['body'],
		unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br', 'script'],
		content_unformatted: [],
	},

	debug: {
		title: '✨  Compiles: ',
	},

	htmlPretty: commonSettingsConfig.isDev,
};

// -----------------------------------------------
// DATA
