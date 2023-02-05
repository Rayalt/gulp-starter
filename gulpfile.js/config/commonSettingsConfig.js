// ===============================================
// COMMON SETTINGS CONFIG
// ===============================================


const isProd = process.argv.includes('--production');
const isDev = !isProd;


// DATA
// -----------------------------------------------

module.exports = commonSettings = {
	isProd: isProd,
	isDev: isDev,

	min: {
		suffix: '.min',
	},

	map: {
		sourcemaps: isDev,
	},

	size: {
		before: {
			title: '🗿 Original size:',
			showFiles: true,
		},

		after: {
			title: '🪶 Minified size:',
			showFiles: true,
		},
	},
};

// -----------------------------------------------
// DATA
