var dest = '/dist';
var src = '.src';

module.exports ={
	browserSync: {
		server: {
			baseDir: [dest, src]
		},
		files: [
			dest + '/**',
			"!" + dest + '/**.map'
		]
	},
	sass: {
		src: src + '/scss/*.{sass, scss}',
		dest: dest,
		settings: {
			sourceComments: 'map',
			imagePath: '/images'
		}
	},
	images: {
		src: src + '/images/**',
		dest: dest + '/images'
	},
	markup: {
		src: src + '/htdocs',
		dest: dest
	},
	browserify:{
		debug: true,
		dest: dest
	}
};