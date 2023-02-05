// ===============================================
// SVG CONFIG
// ===============================================


// DATA
// -----------------------------------------------

module.exports = svgConfig = {
	svgMin: {
		plugins: [
			{
				removeAttrs: {
					attrs: ['xmlns', 'data-name']
				}
			},
			{
				removeViewBox: false
			}
		]
	},

	svgStore: {
		inlineSvg: true
	},

	cheerio: {
		parserOptions: {
			xmlMode: true,
		},
	},

	spriteName: 'svgSprite.svg',
};

// -----------------------------------------------
// DATA
