const browserSync = require('browser-sync');


module.exports = browserSyncInstance = browserSync.has('newProjectServer') ?
	browserSync.get('newProjectServer') :
	browserSync.create('newProjectServer');
