const browserSyncServer = () => $.getBrowsersyncInstance.init($.serverConfig);

const browserSyncReload = (done) => {
	$.getBrowsersyncInstance.reload();
	done();
};

module.exports = {
	browserSyncServer,
	browserSyncReload,
};
