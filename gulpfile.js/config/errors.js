// ===============================================
// ERRORS CONFIG
// ===============================================


// SRC PATH
// -----------------------------------------------

const consoleColors = require('./consoleColors');
const gp = require('gulp-load-plugins')();

// -----------------------------------------------
// SRC PATH


// DATA
// -----------------------------------------------

module.exports = error = {
	errorDefault: {
		errorHandler: function (err) {
			console.log(consoleColors.red, '💩 Error in file: ' + err.message);
			this.emit('end');
		},
	},

	errorNotify: {
		errorHandler: gp.notify.onError(error => ({
			title: '💩 Error in file',
			message: error.message,
		})),
	},
};


// -----------------------------------------------
// DATA
