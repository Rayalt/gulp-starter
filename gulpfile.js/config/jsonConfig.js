// ===============================================
// JSON CONFIG
// ===============================================


// SRC PATH
// -----------------------------------------------

const projectPath = require('./projectPath');

// -----------------------------------------------
// SRC PATH


// DATA
// -----------------------------------------------

const jsonFile = 'allData.json';

module.exports = jsonConfig = {
	fileName: jsonFile,

	jsonInclude: true,

	json: `${projectPath.build.json}${jsonFile}`,
};

// -----------------------------------------------
// DATA
