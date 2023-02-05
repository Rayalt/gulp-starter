// ===============================================
// IMG CONFIG
// ===============================================


// PLUGINS
// -----------------------------------------------

const pngquant = require('imagemin-pngquant');

// -----------------------------------------------
// PLUGINS


// DATA
// -----------------------------------------------

module.exports = imgConfig = {
	minifyImg: {
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
		verbose: true,
	},

	recompress: {
		loops: 6,
		min: 50,
		max: 90,
		quality: 'high',
		use: [pngquant({
			quality: [0.8, 1],
			strip: true,
			speed: 1,
		})],
	},
};

// -----------------------------------------------
// DATA
