// ===============================================
// PROJECT PATH
// ===============================================

// MAIN PATH
// -----------------------------------------------

const pathSrc = './src/';
const pathBuild = './build/';

// -----------------------------------------------
// MAIN PATH


// DATA
// -----------------------------------------------

module.exports = projectPath = {
	pathBuild,

	src: {
		pug: pathSrc + 'pages/includes/*.pug',
		scss: pathSrc + 'styles/style.{sass,scss}',
		svg: pathSrc + 'svg/**/*.svg',
		js: pathSrc + 'js/*.js',
		img: pathSrc + 'img/**/*.{png,jpg,jpeg,gif,svg,ico}',
		webp: pathSrc + 'img/**/*.{png,jpg,jpeg}',
		json: pathSrc + 'data/**/*.json',
		fonts: pathSrc + 'fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	},

	clean: [
		pathSrc + 'json/',
		pathBuild,
	],

	build: {
		html: pathBuild + '',
		css: pathBuild + 'css/',
		js: pathBuild + 'js/',
		img: pathBuild + 'img/',
		json: pathSrc + 'json/',
		fonts: pathBuild + 'fonts/',
	},

	watch: {
		scss: pathSrc + 'styles/**/*.{sass,scss}',
		pug: pathSrc + 'pages/**/*.pug',
		svg: pathSrc + 'svg/**/*.svg',
		js: pathSrc + 'js/**/*.js',
		img: pathSrc + 'img/**/*.{png,jpg,jpeg,gif,svg,ico}',
		webp: pathBuild + 'img/**/*.{png,jpg,jpeg}',
		json: pathSrc + 'data/**/*.json',
		fonts: pathSrc + 'fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	},
};

// -----------------------------------------------
// DATA
