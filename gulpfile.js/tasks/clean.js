// ===============================================
// CLEAN TASK
// ===============================================


// TASK
// -----------------------------------------------

module.exports = clean = done => {
	$.projectPath.clean.forEach(folder => $.fs.removeSync(folder));
	done();
};

// -----------------------------------------------
// TASK
